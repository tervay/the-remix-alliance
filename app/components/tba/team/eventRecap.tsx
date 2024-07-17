import type { Event } from "~/api/requests";

export function TeamEventRecapSkeleton(): JSX.Element {
  return <div>skeleton</div>;
}

export function TeamEventRecap({ event }: { event: Event }): JSX.Element {
  return <div>{event.key}</div>;
}
