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
import { Link, json, useLoaderData } from "@remix-run/react";
import { promiseHash } from "remix-utils/promise";
import {
  useEventServiceGetEvent,
  useEventServiceGetEventAwards,
  useEventServiceGetEventCopRs,
  useEventServiceGetEventOpRs,
  useEventServiceGetEventRankings,
} from "~/api/queries";
import {
  type Award,
  EventService,
  type Event_Ranking,
  type Team,
} from "~/api/requests";
import AllianceSelectionTable from "~/components/tba/allianceTable";
import CoprTableView from "~/components/tba/coprTable";
import CoprTable from "~/components/tba/coprTable";
import InlineIcon from "~/components/tba/inlineIcon";
import MatchTable from "~/components/tba/matchTable";
import MaybeComponent from "~/components/tba/maybeComponent";
import RankingsTable from "~/components/tba/rankingsTable";
import RelatedEventsDropdown from "~/components/tba/relatedEventsDropdown";
import TeamPreviewDialog from "~/components/tba/teamPreviewDialog";
import { Badge } from "~/components/ui/badge";
import BiArrowRightCircleFill from "~icons/bi/arrow-right-circle-fill";
import BiCalendar from "~icons/bi/calendar";
import BiGraphUp from "~icons/bi/graph-up";
import BiInfoCircleFill from "~icons/bi/info-circle-fill";
import BiLink from "~icons/bi/link";
import BiPinMapFill from "~icons/bi/pin-map-fill";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.eventKey === undefined) {
    throw new Error("Missing eventKey");
  }

  console.log("Requesting event", params.eventKey);

  return json(
    await promiseHash({
      event: EventService.getEvent({ eventKey: params.eventKey }),
      matches: EventService.getEventMatches({ eventKey: params.eventKey }),
      alliances: EventService.getEventAlliances({ eventKey: params.eventKey }),
    }),
  );
}
export default function Event() {
  const { event, matches, alliances } = useLoaderData<typeof loader>();
  const startDate = parseDateString(event.start_date);
  const endDate = parseDateString(event.end_date);

  // const matchesQuery = useEventServiceGetEventMatches({ eventKey: event.key });
  const oprsQuery = useEventServiceGetEventCopRs({ eventKey: event.key });
  const rankingsQuery = useEventServiceGetEventRankings({
    eventKey: event.key,
  });
  const awardsQuery = useEventServiceGetEventAwards({ eventKey: event.key });
  const parentEventQuery = event.parent_event_key
    ? useEventServiceGetEvent({ eventKey: event.parent_event_key })
    : null;
  // const alliancesQuery = useEventServiceGetEventAlliances({
  //   eventKey: event.key,
  // });

  return (
    <>
      <div className="flex flex-col mb-2.5">
        <h1 className="text-4xl mb-2.5 mt-5">
          {event.name} {event.year}
        </h1>
        {parentEventQuery && (
          <MaybeComponent
            query={parentEventQuery}
            renderComponent={(data) => (
              <>
                <RelatedEventsDropdown
                  choices={
                    data.division_keys?.map((key) => ({
                      displayName: key,
                      href: `/event/${key}`,
                    })) ?? []
                  }
                />

                <InlineIcon>
                  <BiArrowRightCircleFill />
                  Winners advance to{" "}
                  <Link to={`/event/${data.key}`}>{data.short_name}</Link>
                </InlineIcon>
              </>
            )}
            renderSkeleton={() => (
              <>
                <RelatedEventsDropdown choices={[]} />
                <InlineIcon>
                  <BiArrowRightCircleFill />
                  Winners advance to...
                </InlineIcon>
              </>
            )}
          />
        )}

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
        <TabsList className="flex items-center justify-center flex-wrap h-auto space-y-1">
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>
        <TabsContent value="results">
          <div className="flex justify-between flex-wrap gap-10">
            <div className="grow">
              {/* <MaybeComponent
                query={matchesQuery}
                renderSkeleton={() => <div>Loading...</div>}
                renderComponent={(data) => (
                  <MatchTable
                    matches={data.filter((m) => m.comp_level === "qm")}
                    title="Qualification Results"
                  />
                )}
              /> */}
              <MatchTable
                matches={matches.filter((m) => m.comp_level === "qm")}
                title="Qualification Results"
              />
            </div>
            <div className="grow">
              {/* <MaybeComponent
                query={alliancesQuery}
                renderSkeleton={() => <div>Loading...</div>}
                renderComponent={(data) => (
                  <AllianceSelectionTable alliances={data} />
                )}
              />
              <MaybeComponent
                query={matchesQuery}
                renderSkeleton={() => <div>Loading...</div>}
                renderComponent={(data) => (
                  <MatchTable
                    matches={data.filter((m) => m.comp_level !== "qm")}
                    title="Playoff Results"
                  />
                )}
              /> */}

              <AllianceSelectionTable alliances={alliances} />
              <MatchTable
                matches={matches.filter((m) => m.comp_level !== "qm")}
                title="Playoff Results"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="rankings">
          {/* <RankingsTab rankings={rankings} /> */}
          <MaybeComponent
            query={rankingsQuery}
            renderComponent={(data) => <RankingsTable rankings={data} />}
            renderSkeleton={() => <div>Loading...</div>}
          />
        </TabsContent>
        <TabsContent value="awards">
          {/* <AwardsTab awards={awards} /> */}
        </TabsContent>
        <TabsContent value="teams">
          {/* <TeamsTab teams={teams} /> */}
        </TabsContent>
        <TabsContent value="insights">
          <MaybeComponent
            query={oprsQuery}
            renderSkeleton={() => <div>Loading...</div>}
            renderComponent={(data) => <CoprTableView eventOprs={data} />}
          />
        </TabsContent>
        <TabsContent value="media">
          <MediaTab />
        </TabsContent>
      </Tabs>
    </>
  );
}

function RankingsTab({ rankings }: { rankings: Event_Ranking }) {
  return <RankingsTable rankings={rankings} />;
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
