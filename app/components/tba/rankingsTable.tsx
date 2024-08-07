import { Link } from "@remix-run/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { EventRanking } from "~/api/tba";
import { DataTable } from "~/components/tba/dataTable";
import { cn } from "~/lib/utils";
import BiTrophy from "~icons/bi/trophy";
import InlineIcon from "./inlineIcon";

type RankingColumnType = ColumnDef<EventRanking["rankings"][number]>[];

export default function RankingsTable({
  rankings,
  winners,
  picked,
}: { rankings: EventRanking; winners: string[]; picked: string[] }) {
  const standardCols: RankingColumnType = [
    { header: "Rank", accessorKey: "rank" },
    {
      header: "Team",
      cell: ({ row }) => (
        <Link
          to={`/team/${row.original.team_key.substring(3)}`}
          className="whitespace-nowrap"
        >
          {winners.includes(row.original.team_key) ? (
            <InlineIcon>
              <BiTrophy />
              {row.original.team_key.substring(3)}
            </InlineIcon>
          ) : (
            <>{row.original.team_key.substring(3)}</>
          )}
        </Link>
      ),
      accessorFn: (row) => Number(row.team_key.substring(3)),
    },
  ];

  const sortOrderCols: RankingColumnType = rankings.sort_order_info.map(
    (sortOrder, idx) => ({
      header: sortOrder.name,
      accessorFn: (row) => row.sort_orders?.[idx].toFixed(sortOrder.precision),
    }),
  );

  const generatedCols: RankingColumnType = (
    rankings.extra_stats_info ?? []
  ).map((stat, idx) => ({
    header: stat.name,
    accessorFn: (row) => row.extra_stats?.[idx],
  }));

  return (
    <DataTable
      columns={standardCols.concat(sortOrderCols).concat(generatedCols)}
      data={rankings.rankings}
      conditionalRowStyling={(row) =>
        cn({
          // "bg-gray-100": picked.includes(row.original.team_key),
          "bg-yellow-100 shadow-inner shadow-yellow-200 font-bold":
            winners.includes(row.original.team_key),
        })
      }
    />
  );
}
