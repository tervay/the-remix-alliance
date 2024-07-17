import {
  getAllYears,
  parseDateString,
  parseParamsForYearElseDefault,
} from "@/lib/utils";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { groupBy } from "lodash-es";
import { promiseHash } from "remix-utils/promise";
import { type Event, getEventsByYear } from "~/api/tba";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export async function loader({ params }: LoaderFunctionArgs) {
  const year = parseParamsForYearElseDefault(params);
  if (year === undefined) {
    throw new Error("Invalid year");
  }

  return json(
    await promiseHash({
      events: getEventsByYear({ year }),
      year: Promise.resolve(year),
    }),
  );
}

function WeeklyEventTable({ events, week }: { events: Event[]; week: string }) {
  return (
    <>
      <div className="flex justify-normal items-end mt-5 mb-2.5">
        <h2 className="text-3xl pr-2">Week {week}</h2>
        <h4 className="text-lg text-gray-500">{events.length} Events</h4>
      </div>
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-4/6">Event</TableHead>
            <TableHead>Webcast</TableHead>
            <TableHead>Dates</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => {
            const startDate = parseDateString(event.start_date);
            const endDate = parseDateString(event.end_date);

            return (
              <TableRow key={event.key} className="even:bg-gray-100">
                <TableCell>
                  <div className="flex flex-col">
                    <Link to={`/event/${event.key}`} prefetch="intent">
                      {event.name}
                    </Link>
                    <div>
                      {event.city}, {event.state_prov}, {event.country}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button disabled>Offline</Button>
                </TableCell>
                <TableCell className="">
                  {startDate.toLocaleString("default", {
                    month: "short",
                    day: "2-digit",
                  })}{" "}
                  to{" "}
                  {endDate.toLocaleString("default", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default function Events() {
  const { events, year } = useLoaderData<typeof loader>();
  const weeklyEvents = events.filter(
    (e) => SEASON_EVENT_TYPES.has(e.event_type) && e.week !== undefined,
  );
  const groupedWeeklyEvents = groupBy(weeklyEvents, (e) => e.week);
  const cmpEvents = events.filter((e) => CMP_EVENT_TYPES.has(e.event_type));
  const preseasonEvents = events.filter(
    (e) => e.event_type === EventType.PRESEASON,
  );
  const offseasonEvents = events.filter(
    (e) => e.event_type === EventType.OFFSEASON,
  );

  return (
    <>
      <div className="flex flex-row">
        <div className="md:basis-1/5 hidden md:block">
          <div className="fixed">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"outline"}>{year}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {getAllYears()
                  .reverse()
                  .map((y) => (
                    <DropdownMenuItem key={y} asChild>
                      <Link to={`/events/${y}`} prefetch="viewport">
                        {y}
                      </Link>
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="basis-4/5">
          <div className="flex items-end">
            <h1 className="text-4xl pr-2">
              <i>FIRST</i> Robotics Competition Events
            </h1>
            <div className="text-2xl text-gray-500">{events.length} Events</div>
          </div>

          {Object.entries(groupedWeeklyEvents).map(([week, events]) => (
            <WeeklyEventTable key={week} events={events} week={week} />
          ))}

          {cmpEvents.length > 0 && (
            <WeeklyEventTable events={cmpEvents} week="CMP" />
          )}

          {preseasonEvents.length > 0 && (
            <WeeklyEventTable events={preseasonEvents} week="PRE" />
          )}

          {offseasonEvents.length > 0 && (
            <WeeklyEventTable events={offseasonEvents} week="OFF" />
          )}
        </div>
      </div>
    </>
  );
}
