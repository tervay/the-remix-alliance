import { Link } from "@remix-run/react";
import { max } from "lodash-es";
import { Fragment } from "react";
import type { EliminationAlliance } from "~/api/tba";
import { cn } from "~/lib/utils";

function extractAllianceNumber(input: string): string {
  // Regular expression to match "Alliance" followed by a space and one or more digits
  const regex = /^Alliance (\d+)$/;
  const match = input.match(regex);

  if (match) {
    // If there's a match, return the captured number as a string
    return match[1];
  }

  return input;
}

export default function AllianceSelectionGrid({
  alliances,
}: {
  alliances: EliminationAlliance[];
}) {
  const allianceSize = max(alliances.map((a) => a.picks.length)) || 3;

  // I don't think there's a better way to do this?
  return (
    <div className="grid auto-rows-auto text-center grid-cols-13 p-1 [&>*]:p-1">
      <div>Alliance</div>
      <div className="col-span-12">Teams</div>

      {alliances.map((a) => {
        const width = 12 / a.picks.length;
        const widthClass = {
          2: "col-span-2",
          3: "col-span-3",
          4: "col-span-4",
          6: "col-span-6",
        }[width.toString()];

        return (
          <Fragment key={a.name}>
            <div>{extractAllianceNumber(a.name ?? "")}</div>

            {a.picks.map((p) => (
              <div className={widthClass} key={`${a}-${p}`}>
                <Link to={`/team/${p.substring(3)}`}>{p.substring(3)}</Link>
              </div>
            ))}
          </Fragment>
        );
      })}
    </div>
  );
}
