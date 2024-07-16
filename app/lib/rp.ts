import type {
  Match_Score_Breakdown_2015,
  Match_Score_Breakdown_2016,
  Match_Score_Breakdown_2017,
  Match_Score_Breakdown_2018,
  Match_Score_Breakdown_2019,
  Match_Score_Breakdown_2020,
  Match_Score_Breakdown_2022,
  Match_Score_Breakdown_2023,
} from "~/api/requests";

export type TypedScoreBreakdown =
  | Match_Score_Breakdown_2015
  | Match_Score_Breakdown_2016
  | Match_Score_Breakdown_2017
  | Match_Score_Breakdown_2018
  | Match_Score_Breakdown_2019
  | Match_Score_Breakdown_2020
  | Match_Score_Breakdown_2022
  | Match_Score_Breakdown_2023;

export function unknownScoreBreakdownToProperType(
  scoreBreakdown: unknown,
  year: number,
): TypedScoreBreakdown | undefined {
  switch (year) {
    case 2015:
      return scoreBreakdown as Match_Score_Breakdown_2015;
    case 2016:
      return scoreBreakdown as Match_Score_Breakdown_2016;
    case 2017:
      return scoreBreakdown as Match_Score_Breakdown_2017;
    case 2018:
      return scoreBreakdown as Match_Score_Breakdown_2018;
    case 2019:
      return scoreBreakdown as Match_Score_Breakdown_2019;
    case 2020:
      return scoreBreakdown as Match_Score_Breakdown_2020;
    case 2022:
      return scoreBreakdown as Match_Score_Breakdown_2022;
    case 2023:
      return scoreBreakdown as Match_Score_Breakdown_2023;
    default:
      return undefined;
  }
}

export function achievedRP2(
  scoreBreakdown: TypedScoreBreakdown | unknown,
): boolean {
  return false;
}
