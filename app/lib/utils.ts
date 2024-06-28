import type { Params } from "@remix-run/react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Match } from "~/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export function parseDateString(date: string) {
  return new Date(date);
}

export function sortMatchComparator(a: Match, b: Match) {
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

export function sortMatches(matches: Match[]) {
  return matches.sort(sortMatchComparator);
}

export function getAllYears() {
  return range(1992, getCurrentDefaultYear());
}

export function getCurrentDefaultYear() {
  return 2024;
}

export function parseParamsForYearElseDefault(
  params: Params<string>,
): number | undefined {
  if (params.year === undefined) {
    return getCurrentDefaultYear();
  }

  const year = Number(params.year);
  if (Number.isNaN(year) || year <= 0) {
    return undefined;
  }

  return year;
}
