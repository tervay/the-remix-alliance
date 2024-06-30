import { Link } from "@remix-run/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Event_Ranking } from "~/api/requests";
import { DataTable } from "~/components/tba/dataTable";

type RankingColumnType = ColumnDef<Event_Ranking["rankings"][number]>[];

export default function RankingsTable({
  rankings,
}: { rankings: Event_Ranking }) {
  const standardCols: RankingColumnType = [
    { header: "Rank", accessorKey: "rank" },
    {
      header: "Team",
      cell: ({ row }) => (
        <Link to={`/team/${row.original.team_key.substring(3)}`}>
          {row.original.team_key.substring(3)}
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
    />
  );
}
