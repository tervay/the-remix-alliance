import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { parseDateString } from "@/lib/utils";
import type { LoaderFunctionArgs } from "@remix-run/node";
import {
  Await,
  type ClientLoaderFunctionArgs,
  Link,
  defer,
  useLoaderData,
} from "@remix-run/react";
import { Suspense } from "react";
import { promiseHash } from "remix-utils/promise";
import {
  type Award,
  type EventRanking,
  type Team,
  getEvent,
  getEventAlliances,
  getEventCopRs,
  getEventMatches,
  getEventRankings,
} from "~/api/tba";
import AllianceSelectionTable from "~/components/tba/allianceTable";
import CoprBarChart from "~/components/tba/coprBarChart";
import CoprScatterChart from "~/components/tba/coprScatterChart";
import CoprTableView from "~/components/tba/coprTable";
import InlineIcon from "~/components/tba/inlineIcon";
import MatchTable from "~/components/tba/matchTable";
import RankingsTable from "~/components/tba/rankingsTable";
import RelatedEventsDropdown from "~/components/tba/relatedEventsDropdown";
import TeamPreviewDialog from "~/components/tba/teamPreviewDialog";
import { Badge } from "~/components/ui/badge";
import BiCalendar from "~icons/bi/calendar";
import BiGraphUp from "~icons/bi/graph-up";
import BiInfoCircleFill from "~icons/bi/info-circle-fill";
import BiLink from "~icons/bi/link";
import BiListOl from "~icons/bi/list-ol";
import BiPinMapFill from "~icons/bi/pin-map-fill";
import BiTrophy from "~icons/bi/trophy";
import MdiFolderMediaOutline from "~icons/mdi/folder-media-outline";
import MdiGraphBoxOutline from "~icons/mdi/graph-box-outline";
import MdiRobot from "~icons/mdi/robot";
import MdiTournament from "~icons/mdi/tournament";

function requiredData(eventKey: string) {
  return {
    event: getEvent({ eventKey }),
    matches: getEventMatches({ eventKey }),
    alliances: getEventAlliances({ eventKey }),
  };
}

function delayedData(eventKey: string) {
  return {
    oprs: getEventCopRs({ eventKey }),
    rankings: getEventRankings({ eventKey }),
  };
}

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.eventKey === undefined) {
    throw new Error("Missing eventKey");
  }

  console.log("Requesting event", params.eventKey);
  const delayed = delayedData(params.eventKey);
  const required = await promiseHash(requiredData(params.eventKey));
  const parentEvent =
    required.event.parent_event_key !== undefined &&
    required.event.parent_event_key !== null
      ? getEvent({ eventKey: required.event.parent_event_key })
      : undefined;

  return defer({ ...delayed, ...required, parentEvent });
}

export async function clientLoader({
  params,
  request,
  serverLoader,
}: ClientLoaderFunctionArgs) {
  if (params.eventKey === undefined) {
    throw new Error("Missing eventKey");
  }

  const delayed = delayedData(params.eventKey);
  const required = await promiseHash(requiredData(params.eventKey));

  const parentEvent =
    required.event.parent_event_key !== undefined &&
    required.event.parent_event_key !== null
      ? getEvent({ eventKey: required.event.parent_event_key })
      : Promise.resolve(undefined);

  return { ...delayed, ...required, parentEvent };
}

export function HydrateFallback() {
  return <p>Skeleton rendered during SSR</p>; // (2)
}

export default function EventPage() {
  const { event, matches, alliances, parentEvent, rankings, oprs } =
    useLoaderData<typeof loader>();
  const startDate = parseDateString(event.start_date);
  const endDate = parseDateString(event.end_date);

  return (
    <>
      <div className="flex flex-col mb-2.5">
        <h1 className="text-4xl mb-2.5 mt-5">
          {event.name} {event.year}
        </h1>

        <Suspense fallback={<RelatedEventsDropdown choices={[]} />}>
          <Await resolve={parentEvent}>
            {(e) =>
              e === undefined ? (
                <></>
              ) : (
                <RelatedEventsDropdown
                  choices={(e.division_keys ?? []).map((key) => ({
                    displayName: key,
                    href: `/event/${key}`,
                  }))}
                />
              )
            }
          </Await>
        </Suspense>

        <InlineIcon>
          <BiCalendar />
          {startDate.toLocaleDateString("default", {
            month: "long",
            day: "numeric",
          })}{" "}
          to{" "}
          {endDate.toLocaleDateString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          {event.week && (
            <Badge className="h-[1.5em] align-text-top mx-2">
              Week {event.week + 1}
            </Badge>
          )}
        </InlineIcon>

        <InlineIcon>
          <BiPinMapFill />

          {event.gmaps_url ? (
            <Link to={event.gmaps_url}>
              {event.city}, {event.state_prov}, {event.country}
            </Link>
          ) : (
            <>
              {event.city}, {event.state_prov}, {event.country}
            </>
          )}
        </InlineIcon>
        {event.website && (
          <InlineIcon>
            <BiLink />
            <Link to={event.website}>{event.website}</Link>
          </InlineIcon>
        )}

        {event.first_event_code && (
          <InlineIcon>
            <BiInfoCircleFill />
            Details on{" "}
            <Link
              to={`https://frc-events.firstinspires.org/${event.year}/${event.first_event_code}`}
            >
              FRC Events
            </Link>
          </InlineIcon>
        )}

        <InlineIcon>
          <BiGraphUp />
          <Link to={`https://www.statbotics.io/event/${event.key}`}>
            Statbotics
          </Link>
        </InlineIcon>

        {/* {event.district && (
          <div>{event.district.display_name} District Event</div>
        )} */}
        {/* <div>
          {startDate.toLocaleDateString("default", {
            month: "long",
            day: "numeric",
          })}{" "}
          to{" "}
          {endDate.toLocaleDateString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        {event.week !== undefined && (
          <div>
            <Badge>Week {event.week + 1}</Badge>
          </div>
        )} */}
      </div>

      <Tabs defaultValue="results" className="">
        <TabsList className="flex items-center justify-evenly flex-wrap h-auto [&>*]:basis-1/2 lg:[&>*]:basis-1">
          <TabsTrigger value="results">
            <InlineIcon>
              <MdiTournament />
              Results
            </InlineIcon>
          </TabsTrigger>
          <TabsTrigger value="rankings">
            <InlineIcon>
              <BiListOl />
              Rankings
            </InlineIcon>
          </TabsTrigger>
          <TabsTrigger value="awards">
            <InlineIcon>
              <BiTrophy />
              Awards
            </InlineIcon>
          </TabsTrigger>
          <TabsTrigger value="teams">
            <InlineIcon>
              <MdiRobot />
              Teams
            </InlineIcon>
          </TabsTrigger>
          <TabsTrigger value="insights">
            <InlineIcon>
              <MdiGraphBoxOutline />
              Insights
            </InlineIcon>
          </TabsTrigger>
          <TabsTrigger value="media">
            <InlineIcon>
              <MdiFolderMediaOutline />
              Media
            </InlineIcon>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="results">
          <div className="flex gap-4 flex-wrap lg:flex-nowrap">
            <div className="basis-full lg:basis-1/2">
              <MatchTable
                matches={matches.filter((m) => m.comp_level === "qm")}
                title="Qualification Results"
              />
            </div>
            <div className="basis-full lg:basis-1/2">
              <AllianceSelectionTable alliances={alliances} />
              {/* <AllianceSelectionGrid alliances={alliances} /> */}
              <MatchTable
                matches={matches.filter((m) => m.comp_level !== "qm")}
                title="Playoff Results"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="rankings">
          {/* <RankingsTab rankings={rankings} /> */}
          {/* <MaybeComponent
            query={rankingsQuery}
            renderComponent={(data) => <RankingsTable rankings={data} />}
            renderSkeleton={() => <div>Loading...</div>}
          /> */}

          <Suspense>
            <Await resolve={rankings}>
              {(r) => (
                <RankingsTable
                  rankings={r}
                  winners={
                    alliances.find((a) => a.status?.status === "won")?.picks ??
                    []
                  }
                  picked={alliances.flatMap((a) => a.picks)}
                />
              )}
            </Await>
          </Suspense>
        </TabsContent>
        <TabsContent value="awards">
          {/* <AwardsTab awards={awards} /> */}
        </TabsContent>
        <TabsContent value="teams">
          {/* <TeamsTab teams={teams} /> */}
        </TabsContent>
        <TabsContent value="insights">
          {/* <MaybeComponent
            query={oprsQuery}
            renderSkeleton={() => <div>Loading...</div>}
            renderComponent={(data) => (
              <CoprTableView eventOprs={data} eventYear={event.year} />
            )}
          /> */}
          <Suspense>
            <Await resolve={oprs}>
              {(data) => (
                <div>
                  <CoprScatterChart coprs={data} />
                  <CoprBarChart coprs={data} />
                  <CoprTableView eventOprs={data} eventYear={event.year} />
                </div>
              )}
            </Await>
          </Suspense>
        </TabsContent>
        <TabsContent value="media">
          <MediaTab />
        </TabsContent>
      </Tabs>
    </>
  );
}

function AwardsTab({ awards }: { awards: Award[] }) {
  return (
    <>
      <Table className="table-fixed w-3/5 mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead>Award</TableHead>
            <TableHead className="w-1/12">Winner</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {awards
            .map((award) =>
              award.recipient_list.map((recipient) => (
                <TableRow key={`${award.name}-${recipient.team_key}`}>
                  <TableCell>{award.name}</TableCell>
                  <TableCell>{recipient.team_key?.substring(3)}</TableCell>
                </TableRow>
              )),
            )
            .reduce((prev, curr, i) => {
              prev.push(...curr);
              return prev;
            }, [])}
        </TableBody>
      </Table>
    </>
  );
}

function TeamsTab({ teams }: { teams: Team[] }) {
  const firstHalfTeams = teams.slice(0, teams.length / 2);
  const secondHalfTeams = teams.slice(teams.length / 2);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {firstHalfTeams.map((team) => (
          <TeamPreviewDialog key={team.key} team={team} />
        ))}
      </div>
      <div className="flex flex-col">
        {secondHalfTeams.map((team) => (
          <TeamPreviewDialog key={team.key} team={team} />
        ))}
      </div>
    </div>
  );
}

function InsightsTab() {
  return <div>insights</div>;
}

function MediaTab() {
  return <div>media</div>;
}
