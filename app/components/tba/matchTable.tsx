import { Link } from "@remix-run/react";
import type { Match } from "~/api/requests";
import { cn, sortMatchComparator } from "~/lib/utils";

function matchTitle(match: Match): string {
  if (match.comp_level === "f") {
    return `Finals ${match.match_number}`;
  }

  if (match.comp_level === "qm") {
    return `Quals ${match.match_number}`;
  }

  return `Match ${match.set_number}`;
}

function maybeGetFirstTeamVideoURL(match: Match): string | undefined {
  if (match.videos === undefined || match.videos.length === 0) {
    return undefined;
  }

  return `https://www.youtube.com/watch?v=${match.videos[0].key}`;
}

function TeamCell({
  teamKey,
  color,
  winner,
  gridCellArea,
}: { teamKey?: string; color: string; winner: boolean; gridCellArea: string }) {
  if (teamKey === undefined) {
    return <></>;
  }

  const teamNum = teamKey.substring(3);
  return (
    <div
      className={cn(
        {
          "bg-red-100": color === "red",
          "bg-blue-100": color === "blue",
          "font-semibold": winner,
        },
        "justify-self-stretch text-center p-1",
        "border border-solid border-gray-200",
      )}
      style={{ gridArea: gridCellArea }}
    >
      <Link to={`/team/${teamNum}`}>{teamNum}</Link>
    </div>
  );
}

function ScoreCell({
  match,
  color,
  winner,
  gridCellArea,
}: { match: Match; color: string; winner: boolean; gridCellArea: string }) {
  return (
    <div
      className={cn(
        {
          "bg-red-100": color === "red",
          "bg-blue-100": color === "blue",
          "font-semibold": winner,
        },
        "justify-self-stretch justify-center text-center p-1",
        "border border-solid border-gray-200",
      )}
      style={{ gridArea: gridCellArea }}
    >
      {color === "red"
        ? match.alliances?.red?.score
        : match.alliances?.blue?.score}
    </div>
  );
}

export default function MatchTable(props: { matches: Match[]; title: string }) {
  props.matches.sort(sortMatchComparator);

  return (
    <div className="">
      <div className="font-semibold text-2xl mb-2.5 mt-5">{props.title}</div>

      <div className="border border-solid border-gray-200">
        {props.matches.map((m) => (
          <div
            className={cn(
              "grid grid-flow-col items-center justify-items-center",
              "[&:not(:first-child)]:border-t border-black border-collapse border-spacing-0",
              "grid-cols-[1rem_1.5fr_1fr_1fr_1fr_1fr]",
              "md:grid-cols-[1rem_1.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]",
              "[grid-template-areas:'play_title_r1_r2_r3_rs''play_title_b1_b2_b3_bs']",
              "md:[grid-template-areas:'play_title_r1_r2_r3_b1_b2_b3_rs_bs']",
            )}
            key={m.key}
          >
            <div
              className={cn(
                "row-span-2 lg:row-span-1",
                "justify-self-stretch self-stretch text-center justify-center flex items-center",
                "border-x border-solid border-gray-200",
                "md:[grid-area:play]",
              )}
            >
              {maybeGetFirstTeamVideoURL(m) && (
                <Link target="_blank" to={maybeGetFirstTeamVideoURL(m) ?? "#"}>
                  {">"}
                </Link>
              )}
            </div>
            <div
              className={cn(
                "row-span-2 lg:row-span-1",
                "justify-self-stretch self-stretch text-center justify-center flex items-center",
                "border-x border-solid border-gray-200",
                "md:[grid-area:title]",
              )}
            >
              {matchTitle(m)}
            </div>
            <TeamCell
              teamKey={m.alliances?.red?.team_keys[0]}
              color="red"
              winner={m.winning_alliance === "red"}
              gridCellArea="r1"
            />
            <TeamCell
              teamKey={m.alliances?.blue?.team_keys[0]}
              color="blue"
              winner={m.winning_alliance === "blue"}
              gridCellArea="b1"
            />
            <TeamCell
              teamKey={m.alliances?.red?.team_keys[1]}
              color="red"
              winner={m.winning_alliance === "red"}
              gridCellArea="r2"
            />
            <TeamCell
              teamKey={m.alliances?.blue?.team_keys[1]}
              color="blue"
              winner={m.winning_alliance === "blue"}
              gridCellArea="b2"
            />
            <TeamCell
              teamKey={m.alliances?.red?.team_keys[2]}
              color="red"
              winner={m.winning_alliance === "red"}
              gridCellArea="r3"
            />
            <TeamCell
              teamKey={m.alliances?.blue?.team_keys[2]}
              color="blue"
              winner={m.winning_alliance === "blue"}
              gridCellArea="b3"
            />
            <ScoreCell
              match={m}
              color="red"
              winner={m.winning_alliance === "red"}
              gridCellArea="rs"
            />
            <ScoreCell
              match={m}
              color="blue"
              winner={m.winning_alliance === "blue"}
              gridCellArea="bs"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
