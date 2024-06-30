import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { promiseHash } from "remix-utils/promise";
import {
  useTeamServiceGetTeamEventsByYear,
  useTeamServiceGetTeamMatchesByYear,
  useTeamServiceGetTeamMediaByYear,
  useTeamServiceGetTeamSocialMedia,
} from "~/api/queries";
import {
  type Event,
  type Match,
  type Media,
  type Team,
  TeamService,
  type WLT_Record,
} from "~/api/requests";
import InlineIcon from "~/components/tba/inlineIcon";
import MaybeComponent from "~/components/tba/maybeComponent";
import { SEASON_EVENT_TYPES } from "~/lib/api/EventType";
import { getCurrentDefaultYear } from "~/lib/utils";
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

  return json(
    await promiseHash({
      team: TeamService.getTeam({ teamKey: `frc${params.teamNumber}` }),
    }),
  );
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
  official: WLT_Record;
  overall: WLT_Record;
} {
  const rec: WLT_Record = { losses: 0, ties: 0, wins: 0 };
  const overallRec: WLT_Record = { losses: 0, ties: 0, wins: 0 };

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
  const { team } = useLoaderData<typeof loader>();

  const [overallRecord, setOverallRecord] = useState<WLT_Record>({
    losses: 0,
    ties: 0,
    wins: 0,
  });
  const [officialRecord, setOfficialRecord] = useState<WLT_Record>({
    losses: 0,
    ties: 0,
    wins: 0,
  });
  const [playedInOffseason, setPlayedInOffseason] = useState(false);

  const teamEventsQuery = useTeamServiceGetTeamEventsByYear({
    teamKey: team.key,
    year: getCurrentDefaultYear(),
  });

  const teamMatchesQuery = useTeamServiceGetTeamMatchesByYear({
    teamKey: team.key,
    year: getCurrentDefaultYear(),
  });

  const teamSocialsQuery = useTeamServiceGetTeamSocialMedia({
    teamKey: team.key,
  });

  const teamPicsQuery = useTeamServiceGetTeamMediaByYear({
    teamKey: team.key,
    year: getCurrentDefaultYear(),
  });

  useEffect(() => {
    if (
      teamEventsQuery.data === undefined ||
      teamMatchesQuery.data === undefined
    ) {
      return;
    }

    const records = calculateRecords(
      team,
      teamEventsQuery.data,
      teamMatchesQuery.data,
    );

    setOfficialRecord(records.official);
    setOverallRecord(records.overall);

    if (
      records.official.wins !== records.overall.wins ||
      records.official.losses !== records.overall.losses ||
      records.official.ties !== records.overall.ties
    ) {
      setPlayedInOffseason(true);
    }
  }, [teamEventsQuery.data, teamMatchesQuery.data, team]);

  return (
    <div className="">
      <div className="flex">
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

          <MaybeComponent
            query={teamSocialsQuery}
            renderComponent={(data) => <TeamSocials media={data} />}
            renderSkeleton={() => <></>}
          />
        </div>

        <MaybeComponent
          query={teamPicsQuery}
          renderComponent={(data) => {
            const pic = getPrimaryRobotPic(data);
            if (pic === undefined) {
              return <></>;
            }

            return (
              <div className="basis-1/2">
                <img src={pic.direct_url} alt="Robot" />
              </div>
            );
          }}
          renderSkeleton={() => <></>}
        />
      </div>

      <div className="text-3xl font-semibold">Events Results</div>
      <p>
        Team {team.team_number} was{" "}
        <strong>
          {officialRecord.wins}-{officialRecord.losses}
          {officialRecord.ties > 0 ? `-${officialRecord.ties}` : ""}
        </strong>{" "}
        in official play{" "}
        {playedInOffseason ? (
          <>
            and{" "}
            <strong>
              {overallRecord.wins}-{overallRecord.losses}
              {overallRecord.ties > 0 ? `-${overallRecord.ties}` : ""}
            </strong>{" "}
            overall{" "}
          </>
        ) : (
          <></>
        )}
        in {getCurrentDefaultYear()}.
      </p>
    </div>
  );
}
