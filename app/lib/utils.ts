import type { Params } from "@remix-run/react";
import type { ColumnDef } from "@tanstack/react-table";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Award, Match } from "~/api/tba";
import { AWARD_CATEGORIES, AwardCategory } from "./api/AwardType";

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

export function removeNonNumeric(str: string): string {
  return str.replace(/\D/g, "");
}

export function sortTeamKeys(teamKeys: string[]) {
  return teamKeys.sort(sortTeamKeysComparator);
}

export function sortTeamKeysComparator(a: string, b: string) {
  return Number(removeNonNumeric(a)) - Number(removeNonNumeric(b));
}

export function sortAwards(awards: Award[]) {
  return awards.sort(sortAwardsComparator);
}

export function sortAwardsComparator(a: Award, b: Award) {
  return a.award_type - b.award_type;
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

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function groupAwardsByCategory(awards: Award[]) {
  const grouped: Record<string, Award[]> = {};

  for (const award of awards) {
    for (const [cat, awardTypes] of Object.entries(AWARD_CATEGORIES)) {
      if (awardTypes.has(award.award_type)) {
        if (grouped[cat] === undefined) {
          grouped[cat] = [];
        }

        grouped[cat].push(award);
        break;
      }
    }
  }

  return grouped;
}

export function timestampsAreOnDifferentDays(
  timestamp1: number,
  timestamp2: number,
): boolean {
  const date1 = new Date(timestamp1 * 1000);
  const date2 = new Date(timestamp2 * 1000);

  return (
    date1.getFullYear() !== date2.getFullYear() ||
    date1.getMonth() !== date2.getMonth() ||
    date1.getDate() !== date2.getDate()
  );
}


