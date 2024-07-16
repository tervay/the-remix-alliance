import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Link } from "@remix-run/react";
import { max } from "lodash-es";
import type { Elimination_Alliance } from "~/api/requests";

export default function AllianceSelectionTable(props: {
  alliances: Elimination_Alliance[];
}) {
  const allianceSize = max(props.alliances.map((a) => a.picks.length)) || 3;

  return (
    <div className="mt-5">
      <div className="text-2xl font-bold">Alliances</div>

      <Table>
        <TableHeader>
          <TableRow className="*:font-bold *:h-8">
            <TableHead>Alliance</TableHead>
            <TableHead>Captain</TableHead>
            {[...Array(allianceSize - 1).keys()].map((i) => (
              <TableHead key={i}>Pick {i + 1}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.alliances.map((a) => (
            <TableRow
              key={a.name}
              className={cn("text-center", {
                "font-bold": a.status?.status === "won",
              })}
            >
              <TableCell>{a.name}</TableCell>
              <TableCell>
                <Link to={`/team/${a.picks[0].substring(3)}`}>
                  {a.picks[0].substring(3)}
                </Link>
              </TableCell>

              {a.picks.slice(1).map((p) => (
                <TableCell key={p}>
                  <Link to={`/team/${p.substring(3)}`}>{p.substring(3)}</Link>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
