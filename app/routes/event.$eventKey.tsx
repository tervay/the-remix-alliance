import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  parseDateString,
  sortAwards,
  sortTeamKeysComparator,
} from "@/lib/utils";
import type { LoaderFunctionArgs } from "@remix-run/node";
import {
  Await,
  type ClientLoaderFunctionArgs,
  Link,
  defer,
  useLoaderData,
} from "@remix-run/react";
import { isEmpty } from "lodash-es";
import { Fragment, Suspense, useMemo } from "react";
import { promiseHash } from "remix-utils/promise";
import {
  type Award,
  type AwardRecipient,
  type Event,
  type Team,
  getEvent,
  getEventAlliances,
  getEventAwards,
  getEventCopRs,
  getEventMatches,
  getEventOpRs,
  getEventRankings,
  getEventTeams,
} from "~/api/tba";
import AllianceSelectionTable from "~/components/tba/allianceTable";
import { AwardBanner, SvgBanner } from "~/components/tba/banner";
import CoprBarChart from "~/components/tba/coprBarChart";
import CoprScatterChart from "~/components/tba/coprScatterChart";
import CoprTableView from "~/components/tba/coprTable";
import InlineIcon from "~/components/tba/inlineIcon";
import MatchTable from "~/components/tba/matchTable";
import RankingsTable from "~/components/tba/rankingsTable";
import RelatedEventsDropdown from "~/components/tba/relatedEventsDropdown";
import TeamPreviewDialog from "~/components/tba/teamPreviewDialog";
import { Badge } from "~/components/ui/badge";
import { BLUE_BANNER_AWARDS } from "~/lib/api/AwardType";
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
    coprs: getEventCopRs({ eventKey }),
    oprs: getEventOpRs({ eventKey }),
    rankings: getEventRankings({ eventKey }),
    teams: getEventTeams({ eventKey }),
    awards: getEventAwards({ eventKey }),
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
  const {
    event,
    matches,
    alliances,
    parentEvent,
    rankings,
    oprs,
    coprs,
    teams,
    awards,
  } = useLoaderData<typeof loader>();
  const startDate = parseDateString(event.start_date);
  const endDate = parseDateString(event.end_date);

  const insightsPromise = useMemo(
    () => Promise.all([coprs, oprs]),
    [coprs, oprs],
  );

  const quals = useMemo(
    () => matches.filter((m) => m.comp_level === "qm"),
    [matches],
  );
  const qualsTable = useMemo(
    () => <MatchTable matches={quals} title="Qualification Results" />,
    [quals],
  );
  const nonQuals = useMemo(
    () => matches.filter((m) => m.comp_level !== "qm"),
    [matches],
  );
  const nonQualsTable = useMemo(
    () => <MatchTable matches={nonQuals} title="Playoff Results" />,
    [nonQuals],
  );

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
              {quals.length > 0 ? qualsTable : nonQualsTable}
            </div>
            <div className="basis-full lg:basis-1/2">
              <AllianceSelectionTable alliances={alliances} />
              {quals.length > 0 ? nonQualsTable : <></>}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="rankings">
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
          <Suspense>
            <Await resolve={awards}>
              {(awards) => <AwardsTab awards={awards} event={event} />}
            </Await>
          </Suspense>
        </TabsContent>
        <TabsContent value="teams">
          <Suspense>
            <Await resolve={teams}>{(t) => <TeamsTab teams={t} />}</Await>
          </Suspense>
        </TabsContent>
        <TabsContent value="insights">
          <Suspense>
            <Await resolve={insightsPromise}>
              {([coprs, oprs]) =>
                isEmpty(coprs) ? (
                  <pre>{JSON.stringify(oprs, undefined, 2)}</pre>
                ) : (
                  <div>
                    <CoprScatterChart coprs={coprs} />
                    <CoprBarChart coprs={coprs} />
                    <CoprTableView eventOprs={coprs} eventYear={event.year} />
                  </div>
                )
              }
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

function AwardRecipientLink({ recipient }: { recipient: AwardRecipient }) {
  const teamLink = recipient.team_key ? (
    <Link to={`/team/${recipient.team_key.substring(3)}`}>
      {recipient.team_key.substring(3)}
    </Link>
  ) : (
    <></>
  );

  if (recipient.awardee) {
    if (recipient.team_key) {
      return (
        <>
          {recipient.awardee} ({teamLink})
        </>
      );
    }

    return <>{recipient.awardee}</>;
  }

  if (recipient.team_key) {
    return teamLink;
  }

  return <>n/a</>;
}

function AwardsTab({ awards, event }: { awards: Award[]; event: Event }) {
  sortAwards(awards);
  return (
    <div className="flex flex-wrap-reverse">
      <div className="flex justify-evenly content-start flex-wrap sm:basis-1/4 mt-8 sm:mt-4 gap-y-4">
        {awards
          .filter((a) => BLUE_BANNER_AWARDS.has(a.award_type))
          .map((a) => {
            return (
              <Fragment key={a.award_type}>
                {a.recipient_list.map((r) => (
                  <div
                    className="flex flex-col"
                    key={`${a.award_type}_${r.team_key}`}
                  >
                    <div className="text-2xl text-center font-bold">
                      {r.team_key?.substring(3)}
                    </div>
                    <AwardBanner award={a} event={event} height={225} />
                  </div>
                ))}
              </Fragment>
            );
          })}
      </div>

      <div className="flow-root w-full sm:basis-3/4 sm:mt-6">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          {awards.map((award) => (
            <div
              key={award.name}
              className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4 sm:px-10"
            >
              <dt className="font-medium sm:col-span-2 text-gray-900">
                {BLUE_BANNER_AWARDS.has(award.award_type) ? (
                  <InlineIcon>
                    <SvgBanner height={"200%"} />
                    {award.name}
                  </InlineIcon>
                ) : (
                  award.name
                )}
              </dt>
              <dd className="text-gray-700 sm:text-right">
                {award.recipient_list
                  .sort((a, b) =>
                    sortTeamKeysComparator(
                      a.team_key ?? "0",
                      b.team_key ?? "0",
                    ),
                  )
                  .map((r, i) => [
                    i > 0 && (r.awardee ? <br /> : ", "),
                    <AwardRecipientLink
                      recipient={r}
                      key={`${award.award_type}-${r.awardee}-${r.team_key}`}
                    />,
                  ])}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function TeamsTab({ teams }: { teams: Team[] }) {
  teams.sort((a, b) => a.team_number - b.team_number);

  return (
    <div className="columns-2">
      {teams.map((team) => (
        <TeamPreviewDialog key={team.key} team={team} />
      ))}
    </div>
  );
}

function InsightsTab() {
  return <div>insights</div>;
}

function MediaTab() {
  return <div>media</div>;
}
