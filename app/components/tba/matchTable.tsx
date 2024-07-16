import { Link } from "@remix-run/react";
import { type VariantProps, cva } from "class-variance-authority";
import { zip } from "lodash-es";
import type React from "react";
import type { Match } from "~/api/requests";
import { cn, sortMatchComparator } from "~/lib/utils";
import PlayCircle from "~icons/bi/play-circle";

const cellVariants = cva("", {
  variants: {
    matchResult: {
      winner: "font-semibold",
      loser: "",
    },
    allianceColor: {
      red: "bg-alliance-red-light",
      blue: "bg-alliance-blue-light",
    },
    teamOrScore: {
      team: "",
      score: "",
    },
    dq: {},
  },
  defaultVariants: {
    matchResult: "loser",
    allianceColor: undefined,
    teamOrScore: "team",
  },
  compoundVariants: [
    {
      allianceColor: "red",
      teamOrScore: "score",
      class: "bg-alliance-red-dark",
    },
    {
      allianceColor: "blue",
      teamOrScore: "score",
      class: "bg-alliance-blue-dark",
    },
  ],
});

interface CellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cellVariants> {}
function GridCell({
  className,
  matchResult,
  allianceColor,
  teamOrScore,
  ...props
}: CellProps) {
  return (
    <div
      className={cn(
        cellVariants({ matchResult, allianceColor, teamOrScore }),
        className,
      )}
      {...props}
    />
  );
}

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

// tailwindgen.com is recommended if you're editing the grid classes
export default function MatchTable(props: { matches: Match[]; title: string }) {
  props.matches.sort(sortMatchComparator);

  const gridStyle = cn(
    // always use these classes:
    "grid items-center justify-items-center",
    "[&>*]:justify-self-stretch [&>*]:justify-center",
    "[&>*]:text-center [&>*]:p-[5px] [&>*]:h-full [&>*]:content-center",
    // use these classes on mobile:
    "grid-rows-2",
    "grid-cols-[calc(1.25em+10px)_8em_1fr_1fr_1fr_1fr]", // 6 columns of these sizes
    "border-[#000] border-b-[1px]",
    "[&>*]:border-[#ddd] [&>*]:border-[1px]",
    // use these on desktop:
    "lg:grid-rows-1",
    "lg:grid-cols-[calc(1.25em+6px*2)_8em_repeat(6,minmax(0,1fr))_0.75fr_0.75fr]",
    "lg:border-[#ddd] lg:border-b-[1px]",
    "[&>*]:lg:border-0 [&>*]:lg:border-r-[1px]", // reset the border, then apply one to the right
  );

  return (
    <div>
      <div className="font-semibold text-2xl mb-2.5 mt-5">{props.title}</div>

      <div className="border-[#ddd] border-t-[1px] border-l-[1px]">
        <div className={cn(gridStyle, "bg-[#f0f0f0] font-semibold")}>
          <div>
            <PlayCircle className="inline" />
          </div>
          <div>Match</div>
          <div className="col-span-3">Red Alliance</div>
          <div className="col-span-3 col-start-6">Blue Alliance</div>
          <div className="col-span-2 col-start-9">Scores</div>
        </div>

        {props.matches.map((m) => (
          <div key={m.key} className={gridStyle}>
            {/* play button and match title */}
            <GridCell className="row-span-2">
              {m.videos !== undefined && m.videos.length > 0 && (
                <Link to={maybeGetFirstTeamVideoURL(m) ?? "#"}>
                  <PlayCircle className="inline" />
                </Link>
              )}
            </GridCell>
            <GridCell className="row-span-2">{matchTitle(m)}</GridCell>

            {/* red alliance */}
            {m.alliances?.red?.team_keys.map((k) => (
              <GridCell
                key={k}
                allianceColor={"red"}
                matchResult={m.winning_alliance === "red" ? "winner" : "loser"}
              >
                <Link to={`/team/${k?.substring(3)}`}>{k?.substring(3)}</Link>
              </GridCell>
            ))}

            {/* blue alliance */}
            {zip(m.alliances?.blue?.team_keys, [
              "col-start-3 row-start-2 lg:col-start-6 lg:row-start-1",
              "col-start-4 row-start-2 lg:col-start-7 lg:row-start-1",
              "col-start-5 row-start-2 lg:col-start-8 lg:row-start-1",
            ]).map(([k, x]) => (
              <GridCell
                key={k}
                allianceColor={"blue"}
                matchResult={m.winning_alliance === "blue" ? "winner" : "loser"}
                className={x}
              >
                <Link to={`/team/${k?.substring(3)}`}>{k?.substring(3)}</Link>
              </GridCell>
            ))}

            {/* scores */}
            <GridCell
              className="col-start-6 row-start-1 lg:col-start-9"
              allianceColor={"red"}
              matchResult={m.winning_alliance === "red" ? "winner" : "loser"}
              teamOrScore={"score"}
            >
              {m.alliances?.red?.score}
            </GridCell>
            <GridCell
              className="col-start-6 lg:col-start-10"
              allianceColor={"blue"}
              matchResult={m.winning_alliance === "blue" ? "winner" : "loser"}
              teamOrScore={"score"}
            >
              {m.alliances?.blue?.score}
            </GridCell>
          </div>
        ))}
      </div>
    </div>
  );
}
