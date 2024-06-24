import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Event,
  EventAlliance,
  EventMatch,
  EventRankings,
  Team,
} from "@/lib/TBATypes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTba(endpoint: string): ReturnType<typeof fetch> {
  return fetch(`https://www.thebluealliance.com/api/v3/${endpoint}`, {
    headers: {
      "X-TBA-Auth-Key":
        "kfh5fzZbU7MFkDhl7CwLGMSVDf0M4GmeO5SkiLmCFzseQ8dJAPHWLHCisSWMoNJC",
    },
  });
}

export function getTbaEvents(year: number): Promise<Event[]> {
  return getTba(`events/${year}`).then<Event[]>((res) => res.json());
}

export function getTbaEvent(eventKey: string): Promise<Event> {
  return getTba(`event/${eventKey}`).then<Event>((res) => res.json());
}

export function getTbaEventAlliances(
  eventKey: string
): Promise<EventAlliance[]> {
  return getTba(`event/${eventKey}/alliances`).then<EventAlliance[]>((res) =>
    res.json()
  );
}

export function getTbaEventRankings(eventKey: string): Promise<EventRankings> {
  return getTba(`event/${eventKey}/rankings`).then<EventRankings>((res) =>
    res.json()
  );
}

export function getTbaEventMatches(eventKey: string): Promise<EventMatch[]> {
  return getTba(`event/${eventKey}/matches`).then<EventMatch[]>((res) =>
    res.json()
  );
}

export function getTbaEventTeams(eventKey: string): Promise<Team[]> {
  return getTba(`event/${eventKey}/teams`).then<Team[]>((res) => res.json());
}

export function parseDateString(date: string) {
  return new Date(date);
}

export function sortMatchComparator(a: EventMatch, b: EventMatch) {
  const compLevelValues: Record<string, number> = {
    f: 5,
    sf: 4,
    qf: 3,
    ef: 2,
    qm: 1,
  };
  if (a.comp_level !== b.comp_level) {
    return (
      (compLevelValues[a.comp_level] ?? 0) -
      (compLevelValues[b.comp_level] ?? 0)
    );
  }

  return a.set_number - b.set_number || a.match_number - b.match_number;
}

export function sortMatches(matches: EventMatch[]) {
  return matches.sort(sortMatchComparator);
}
