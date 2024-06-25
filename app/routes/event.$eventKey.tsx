import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { parseDateString } from "@/lib/utils";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { promiseHash } from "remix-utils/promise";
import {
  type Award,
  type Event_Ranking,
  type Team,
  getEvent,
  getEventAlliances,
  getEventAwards,
  getEventMatchesSimple,
  getEventOpRs,
  getEventRankings,
  getEventTeams,
} from "~/api";
import RankingsTable from "~/components/tba/rankingsTable";
import TeamPreviewDialog from "~/components/tba/teamPreviewDialog";
import { Badge } from "~/components/ui/badge";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.eventKey === undefined) {
    throw new Error("Missing eventKey");
  }

  return json(
    await promiseHash({
      event: getEvent({ eventKey: params.eventKey }),
      alliances: getEventAlliances({ eventKey: params.eventKey }),
      rankings: getEventRankings({ eventKey: params.eventKey }),
      matches: getEventMatchesSimple({ eventKey: params.eventKey }),
      teams: getEventTeams({ eventKey: params.eventKey }),
      insights: getEventOpRs({ eventKey: params.eventKey }),
      awards: getEventAwards({ eventKey: params.eventKey }),
    }),
  );
}
export default function Event() {
  const { event, alliances, awards, insights, matches, rankings, teams } =
    useLoaderData<typeof loader>();
  const startDate = parseDateString(event.start_date);
  const endDate = parseDateString(event.end_date);
  awards.sort((a, b) => a.award_type - b.award_type);
  rankings.rankings.sort((a, b) => a.rank - b.rank);
  teams.sort((a, b) => a.team_number - b.team_number);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-4xl mb-2.5 mt-5">
          {event.name} {event.year}
        </h1>
        {event.district && (
          <div>{event.district.display_name} District Event</div>
        )}
        <div>
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
        )}
      </div>
      <Tabs defaultValue="results" className="">
        <TabsList>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>
        <TabsContent value="results">
          <ResultsTab />
        </TabsContent>
        <TabsContent value="rankings">
          <RankingsTab rankings={rankings} />
        </TabsContent>
        <TabsContent value="awards">
          <AwardsTab awards={awards} />
        </TabsContent>
        <TabsContent value="teams">
          <TeamsTab teams={teams} />
        </TabsContent>
        <TabsContent value="insights">
          <InsightsTab />
        </TabsContent>
        <TabsContent value="media">
          <MediaTab />
        </TabsContent>
      </Tabs>
    </>
  );
}

function ResultsTab() {
  return (
    <>
      <div className="flex">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
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
