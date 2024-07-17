import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Await, Link, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import {
  type Event,
  type Match,
  type Media,
  type Team,
  type WltRecord,
  getTeam,
  getTeamEventsByYear,
} from "~/api/tba";
import InlineIcon from "~/components/tba/inlineIcon";
import BiCalendar from "~icons/bi/calendar";
import BiFacebook from "~icons/bi/facebook";
import BiGithub from "~icons/bi/github";
import BiGitlab from "~icons/bi/gitlab";
import BiGraphUp from "~icons/bi/graph-up";
import BiInfoCircleFill from "~icons/bi/info-circle-fill";
import BiInstagram from "~icons/bi/instagram";
import BiLink from "~icons/bi/link";
import BiPinMapFill from "~icons/bi/pin-map-fill";
import BiTwitterX from "~icons/bi/twitter-x";
import BiYoutube from "~icons/bi/youtube";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.teamNumber === undefined) {
    throw new Error("Missing teamNumber");
  }

  const teamEvents = getTeamEventsByYear({
    teamKey: `frc${params.teamNumber}`,
    year: 2024,
  });

  const team = await getTeam({
    teamKey: `frc${params.teamNumber}`,
  });

  return defer({
    team,
    teamEvents,
  });
}

function TeamSocials({ media }: { media: Media[] }) {
  return (
    <>
      {media.map((m) => {
        switch (m.type) {
          case "github-profile":
            return (
              <InlineIcon key={`${m.type}-${m.foreign_key}`}>
                <BiGithub />
                <Link to={`https://www.github.com/${m.foreign_key}`}>
                  {m.foreign_key}
                </Link>
              </InlineIcon>
            );
          case "gitlab-profile":
            return (
              <InlineIcon key={`${m.type}-${m.foreign_key}`}>
                <BiGitlab />
                <Link to={`https://www.gitlab.com/${m.foreign_key}`}>
                  {m.foreign_key}
                </Link>
              </InlineIcon>
            );
          case "facebook-profile":
            return (
              <InlineIcon key={`${m.type}-${m.foreign_key}`}>
                <BiFacebook />
                <Link to={`https://www.facebook.com/${m.foreign_key}`}>
                  {m.foreign_key}
                </Link>
              </InlineIcon>
            );
          case "instagram-profile":
            return (
              <InlineIcon key={`${m.type}-${m.foreign_key}`}>
                <BiInstagram />
                <Link to={`https://www.instagram.com/${m.foreign_key}`}>
                  {m.foreign_key}
                </Link>
              </InlineIcon>
            );
          case "twitter-profile":
            return (
              <InlineIcon key={`${m.type}-${m.foreign_key}`}>
                <BiTwitterX />
                <Link to={`https://www.twitter.com/${m.foreign_key}`}>
                  {m.foreign_key}
                </Link>
              </InlineIcon>
            );
          case "youtube":
          case "youtube-channel":
            return (
              <InlineIcon key={`${m.type}-${m.foreign_key}`}>
                <BiYoutube />
                <Link to={`https://www.youtube.com/${m.foreign_key}`}>
                  {m.foreign_key}
                </Link>
              </InlineIcon>
            );

          case "avatar":
          case "cdphotothread":
          case "external-link":
          case "grabcad":
          case "imgur":
          case "instagram-image":
          case "periscope-profile":
            return null;
        }
      })}
    </>
  );
}

function getPrimaryRobotPic(pics: Media[]): Media | undefined {
  if (pics.length === 0) {
    return undefined;
  }

  const maybePreferred = pics.find((p) => p.preferred);
  if (maybePreferred !== undefined) {
    return maybePreferred;
  }

  return pics.find((p) => p.type !== "avatar");
}

function calculateRecords(
  team: Team,
  events: Event[],
  matches: Match[],
): {
  official: WltRecord;
  overall: WltRecord;
} {
  const rec: WltRecord = { losses: 0, ties: 0, wins: 0 };
  const overallRec: WltRecord = { losses: 0, ties: 0, wins: 0 };

  for (const event of events) {
    const official = SEASON_EVENT_TYPES.has(event.event_type);
    for (const match of matches.filter((m) => m.event_key === event.key)) {
      if (
        (match.winning_alliance === "red" &&
          match.alliances?.red?.team_keys.includes(team.key)) ||
        (match.winning_alliance === "blue" &&
          match.alliances?.blue?.team_keys.includes(team.key))
      ) {
        overallRec.wins++;
        if (official) {
          rec.wins++;
        }
      } else if (
        (match.winning_alliance === "blue" &&
          match.alliances?.red?.team_keys.includes(team.key)) ||
        (match.winning_alliance === "red" &&
          match.alliances?.blue?.team_keys.includes(team.key))
      ) {
        overallRec.losses++;
        if (official) {
          rec.losses++;
        }
      } else if (
        match.winning_alliance === "" &&
        match.alliances?.blue?.score !== -1
      ) {
        overallRec.ties++;
        if (official) {
          rec.ties++;
        }
      }
    }
  }

  return {
    official: rec,
    overall: overallRec,
  };
}

export default function TeamPage() {
  const { team, teamEvents } = useLoaderData<typeof loader>();

  return (
    <div className="w-5/6">
      <div className="flex justify-between">
        <div className="basis-1/2">
          <div className="text-3xl font-semibold">
            Team {team.team_number} - {team.nickname}
          </div>

          <InlineIcon>
            <BiPinMapFill />
            {team.city}, {team.state_prov}, {team.country}
          </InlineIcon>

          <InlineIcon>
            <BiInfoCircleFill />
            {team.name}
          </InlineIcon>

          <InlineIcon>
            <BiCalendar />
            Rookie Year: {team.rookie_year}
          </InlineIcon>

          <InlineIcon>
            <BiLink />
            Details on{" "}
            <Link
              to={`https://frc-events.firstinspires.org/team/${team.team_number}`}
            >
              FRC Events
            </Link>
          </InlineIcon>

          <InlineIcon>
            <BiGraphUp />
            <Link to={`https://www.statbotics.io/team/${team.team_number}`}>
              Statbotics
            </Link>
          </InlineIcon>
        </div>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <div className="text-3xl font-semibold">Events Results</div>

      <Suspense fallback={<div>loading..</div>}>
        <Await resolve={teamEvents}>
          {/* {(users) => <pre>{JSON.stringify(users, null, 2)}</pre>} */}
          {(teamEvents) => <div>{teamEvents.length}</div>}
        </Await>
      </Suspense>
    </div>
  );
}
