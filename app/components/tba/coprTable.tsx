import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Link } from "@remix-run/react";
import {
  type ColumnDef,
  type ColumnOrderState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import type { Event_COPRs } from "~/api/requests";
import { Switch } from "~/components/ui/switch";
import type { DataTableProps } from "~/lib/utils";

export default function CoprTableView({
  eventOprs,
  eventYear,
}: { eventOprs: Event_COPRs; eventYear: number }) {
  const teamCoprLookup: Record<string, Record<string, number>> = {};
  for (const [componentKey, teamToCoprMap] of Object.entries(eventOprs)) {
    for (const [teamKey, copr] of Object.entries(teamToCoprMap)) {
      if (!teamCoprLookup[teamKey]) {
        teamCoprLookup[teamKey] = {};
      }

      teamCoprLookup[teamKey][componentKey] = copr;
    }
  }

  const data = Object.entries(teamCoprLookup);
  const firstCol: ColumnDef<(typeof data)[number]>[] = [
    {
      header: "Team",
      cell: ({ row }) => (
        <Link to={`/team/${row.original[0].substring(3)}`}>
          {row.original[0].substring(3)}
        </Link>
      ),
      accessorFn: (row) => Number(row[0].substring(3)),
      enableHiding: false,
    },
  ];
  const cols: ColumnDef<(typeof data)[number]>[] = Object.keys(eventOprs).map(
    (key) => ({
      header: key,
      accessorFn: (row) => row[1][key].toFixed(3),
    }),
  );

  return (
    <>
      <CoprTable
        columns={firstCol.concat(cols)}
        data={data}
        defaultEnabled={getDefaultlyEnabledColumns(eventYear, eventOprs)}
      />
    </>
  );
}

function getDefaultlyEnabledColumns(
  year: number,
  coprs: Event_COPRs,
): string[] {
  return Object.keys(coprs).filter((k) => k.includes(" "));
}

function ToggleableCopr({
  name,
  checked,
  onChange,
}: { name: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={name} checked={checked} onCheckedChange={onChange} />
      <Label>{name}</Label>
    </div>
  );
}

function CoprTable<TData, TValue>({
  columns,
  data,
  defaultEnabled,
}: DataTableProps<TData, TValue> & { defaultEnabled: string[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);
  const [columnVisibility, setColumnVisibility] = useState(
    defaultEnabled.reduce(
      (acc, cur) => {
        acc[cur] = true;
        return acc;
      },
      columns.reduce(
        (acc, cur) => {
          if (cur.enableHiding !== undefined && !cur.enableHiding) {
            return acc;
          }

          acc[cur.header as string] = false;
          return acc;
        },
        {} as Record<string, boolean>,
      ),
    ),
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: { sorting, columnVisibility, columnOrder },
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
  });

  return (
    <div className="flex">
      <div>
        {table.getAllLeafColumns().map((column) => {
          if (!column.getCanHide()) {
            return null;
          }

          return (
            <ToggleableCopr
              key={column.id}
              name={column.id}
              checked={column.getIsVisible()}
              onChange={(x) => {
                // Radix only gives us back a boolean, but Tanstack Table wants
                // an event object with a .target.checked property
                // .... so call it with a made up one
                column.getToggleVisibilityHandler()({ target: { checked: x } });
              }}
            />
          );
        })}
      </div>

      <div className="overflow-x-auto">
        <Table className="mx-auto">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div
                          className={
                            header.column.getCanSort()
                              ? "cursor-pointer select-none text-center"
                              : ""
                          }
                          onClick={header.column.getToggleSortingHandler()}
                          onKeyDown={header.column.getToggleSortingHandler()}
                          title={
                            header.column.getCanSort()
                              ? header.column.getNextSortingOrder() === "asc"
                                ? "Sort ascending"
                                : header.column.getNextSortingOrder() === "desc"
                                  ? "Sort descending"
                                  : "Clear sort"
                              : undefined
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
