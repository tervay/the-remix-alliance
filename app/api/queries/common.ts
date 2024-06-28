// generated with @7nohe/openapi-react-query-codegen@1.4.1

import type { UseQueryResult } from "@tanstack/react-query";
import type {
  DistrictService,
  EventService,
  ListService,
  MatchService,
  TbaService,
  TeamService,
} from "../requests/services.gen";
export type TbaServiceGetStatusDefaultResponse = Awaited<
  ReturnType<typeof TbaService.getStatus>
>;
export type TbaServiceGetStatusQueryResult<
  TData = TbaServiceGetStatusDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTbaServiceGetStatusKey = "TbaServiceGetStatus";
export const UseTbaServiceGetStatusKeyFn = (
  {
    ifNoneMatch,
  }: {
    ifNoneMatch?: string;
  } = {},
  queryKey?: Array<unknown>,
) => [useTbaServiceGetStatusKey, ...(queryKey ?? [{ ifNoneMatch }])];
export type TeamServiceGetTeamsDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeams>
>;
export type TeamServiceGetTeamsQueryResult<
  TData = TeamServiceGetTeamsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamsKey = "TeamServiceGetTeams";
export const UseTeamServiceGetTeamsKeyFn = (
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: Array<unknown>,
) => [useTeamServiceGetTeamsKey, ...(queryKey ?? [{ ifNoneMatch, pageNum }])];
export type TeamServiceGetTeamsSimpleDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamsSimple>
>;
export type TeamServiceGetTeamsSimpleQueryResult<
  TData = TeamServiceGetTeamsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamsSimpleKey = "TeamServiceGetTeamsSimple";
export const UseTeamServiceGetTeamsSimpleKeyFn = (
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamsSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum }]),
];
export type TeamServiceGetTeamsKeysDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamsKeys>
>;
export type TeamServiceGetTeamsKeysQueryResult<
  TData = TeamServiceGetTeamsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamsKeysKey = "TeamServiceGetTeamsKeys";
export const UseTeamServiceGetTeamsKeysKeyFn = (
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamsKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum }]),
];
export type TeamServiceGetTeamsByYearDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamsByYear>
>;
export type TeamServiceGetTeamsByYearQueryResult<
  TData = TeamServiceGetTeamsByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamsByYearKey = "TeamServiceGetTeamsByYear";
export const UseTeamServiceGetTeamsByYearKeyFn = (
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamsByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum, year }]),
];
export type TeamServiceGetTeamsByYearSimpleDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamsByYearSimple>
>;
export type TeamServiceGetTeamsByYearSimpleQueryResult<
  TData = TeamServiceGetTeamsByYearSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamsByYearSimpleKey =
  "TeamServiceGetTeamsByYearSimple";
export const UseTeamServiceGetTeamsByYearSimpleKeyFn = (
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamsByYearSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum, year }]),
];
export type TeamServiceGetTeamsByYearKeysDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamsByYearKeys>
>;
export type TeamServiceGetTeamsByYearKeysQueryResult<
  TData = TeamServiceGetTeamsByYearKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamsByYearKeysKey =
  "TeamServiceGetTeamsByYearKeys";
export const UseTeamServiceGetTeamsByYearKeysKeyFn = (
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamsByYearKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum, year }]),
];
export type TeamServiceGetTeamDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeam>
>;
export type TeamServiceGetTeamQueryResult<
  TData = TeamServiceGetTeamDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamKey = "TeamServiceGetTeam";
export const UseTeamServiceGetTeamKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [useTeamServiceGetTeamKey, ...(queryKey ?? [{ ifNoneMatch, teamKey }])];
export type TeamServiceGetTeamSimpleDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamSimple>
>;
export type TeamServiceGetTeamSimpleQueryResult<
  TData = TeamServiceGetTeamSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamSimpleKey = "TeamServiceGetTeamSimple";
export const UseTeamServiceGetTeamSimpleKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamYearsParticipatedDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamYearsParticipated>
>;
export type TeamServiceGetTeamYearsParticipatedQueryResult<
  TData = TeamServiceGetTeamYearsParticipatedDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamYearsParticipatedKey =
  "TeamServiceGetTeamYearsParticipated";
export const UseTeamServiceGetTeamYearsParticipatedKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamYearsParticipatedKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamDistrictsDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamDistricts>
>;
export type TeamServiceGetTeamDistrictsQueryResult<
  TData = TeamServiceGetTeamDistrictsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamDistrictsKey = "TeamServiceGetTeamDistricts";
export const UseTeamServiceGetTeamDistrictsKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamDistrictsKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamRobotsDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamRobots>
>;
export type TeamServiceGetTeamRobotsQueryResult<
  TData = TeamServiceGetTeamRobotsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamRobotsKey = "TeamServiceGetTeamRobots";
export const UseTeamServiceGetTeamRobotsKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamRobotsKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamEventsDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEvents>
>;
export type TeamServiceGetTeamEventsQueryResult<
  TData = TeamServiceGetTeamEventsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventsKey = "TeamServiceGetTeamEvents";
export const UseTeamServiceGetTeamEventsKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventsKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamEventsSimpleDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventsSimple>
>;
export type TeamServiceGetTeamEventsSimpleQueryResult<
  TData = TeamServiceGetTeamEventsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventsSimpleKey =
  "TeamServiceGetTeamEventsSimple";
export const UseTeamServiceGetTeamEventsSimpleKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventsSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamEventsKeysDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventsKeys>
>;
export type TeamServiceGetTeamEventsKeysQueryResult<
  TData = TeamServiceGetTeamEventsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventsKeysKey =
  "TeamServiceGetTeamEventsKeys";
export const UseTeamServiceGetTeamEventsKeysKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventsKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamEventsByYearDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventsByYear>
>;
export type TeamServiceGetTeamEventsByYearQueryResult<
  TData = TeamServiceGetTeamEventsByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventsByYearKey =
  "TeamServiceGetTeamEventsByYear";
export const UseTeamServiceGetTeamEventsByYearKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventsByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type TeamServiceGetTeamEventsByYearSimpleDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventsByYearSimple>
>;
export type TeamServiceGetTeamEventsByYearSimpleQueryResult<
  TData = TeamServiceGetTeamEventsByYearSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventsByYearSimpleKey =
  "TeamServiceGetTeamEventsByYearSimple";
export const UseTeamServiceGetTeamEventsByYearSimpleKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventsByYearSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type TeamServiceGetTeamEventsByYearKeysDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventsByYearKeys>
>;
export type TeamServiceGetTeamEventsByYearKeysQueryResult<
  TData = TeamServiceGetTeamEventsByYearKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventsByYearKeysKey =
  "TeamServiceGetTeamEventsByYearKeys";
export const UseTeamServiceGetTeamEventsByYearKeysKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventsByYearKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type TeamServiceGetTeamEventsStatusesByYearDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventsStatusesByYear>
>;
export type TeamServiceGetTeamEventsStatusesByYearQueryResult<
  TData = TeamServiceGetTeamEventsStatusesByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventsStatusesByYearKey =
  "TeamServiceGetTeamEventsStatusesByYear";
export const UseTeamServiceGetTeamEventsStatusesByYearKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventsStatusesByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type TeamServiceGetTeamEventMatchesDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventMatches>
>;
export type TeamServiceGetTeamEventMatchesQueryResult<
  TData = TeamServiceGetTeamEventMatchesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventMatchesKey =
  "TeamServiceGetTeamEventMatches";
export const UseTeamServiceGetTeamEventMatchesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventMatchesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamEventMatchesSimpleDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventMatchesSimple>
>;
export type TeamServiceGetTeamEventMatchesSimpleQueryResult<
  TData = TeamServiceGetTeamEventMatchesSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventMatchesSimpleKey =
  "TeamServiceGetTeamEventMatchesSimple";
export const UseTeamServiceGetTeamEventMatchesSimpleKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventMatchesSimpleKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamEventMatchesKeysDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventMatchesKeys>
>;
export type TeamServiceGetTeamEventMatchesKeysQueryResult<
  TData = TeamServiceGetTeamEventMatchesKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventMatchesKeysKey =
  "TeamServiceGetTeamEventMatchesKeys";
export const UseTeamServiceGetTeamEventMatchesKeysKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventMatchesKeysKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamEventAwardsDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventAwards>
>;
export type TeamServiceGetTeamEventAwardsQueryResult<
  TData = TeamServiceGetTeamEventAwardsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventAwardsKey =
  "TeamServiceGetTeamEventAwards";
export const UseTeamServiceGetTeamEventAwardsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventAwardsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamEventStatusDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamEventStatus>
>;
export type TeamServiceGetTeamEventStatusQueryResult<
  TData = TeamServiceGetTeamEventStatusDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamEventStatusKey =
  "TeamServiceGetTeamEventStatus";
export const UseTeamServiceGetTeamEventStatusKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamEventStatusKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamAwardsDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamAwards>
>;
export type TeamServiceGetTeamAwardsQueryResult<
  TData = TeamServiceGetTeamAwardsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamAwardsKey = "TeamServiceGetTeamAwards";
export const UseTeamServiceGetTeamAwardsKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamAwardsKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type TeamServiceGetTeamAwardsByYearDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamAwardsByYear>
>;
export type TeamServiceGetTeamAwardsByYearQueryResult<
  TData = TeamServiceGetTeamAwardsByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamAwardsByYearKey =
  "TeamServiceGetTeamAwardsByYear";
export const UseTeamServiceGetTeamAwardsByYearKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamAwardsByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type TeamServiceGetTeamMatchesByYearDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamMatchesByYear>
>;
export type TeamServiceGetTeamMatchesByYearQueryResult<
  TData = TeamServiceGetTeamMatchesByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamMatchesByYearKey =
  "TeamServiceGetTeamMatchesByYear";
export const UseTeamServiceGetTeamMatchesByYearKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamMatchesByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type TeamServiceGetTeamMatchesByYearSimpleDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamMatchesByYearSimple>
>;
export type TeamServiceGetTeamMatchesByYearSimpleQueryResult<
  TData = TeamServiceGetTeamMatchesByYearSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamMatchesByYearSimpleKey =
  "TeamServiceGetTeamMatchesByYearSimple";
export const UseTeamServiceGetTeamMatchesByYearSimpleKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamMatchesByYearSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type TeamServiceGetTeamMatchesByYearKeysDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamMatchesByYearKeys>
>;
export type TeamServiceGetTeamMatchesByYearKeysQueryResult<
  TData = TeamServiceGetTeamMatchesByYearKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamMatchesByYearKeysKey =
  "TeamServiceGetTeamMatchesByYearKeys";
export const UseTeamServiceGetTeamMatchesByYearKeysKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamMatchesByYearKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type TeamServiceGetTeamMediaByYearDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamMediaByYear>
>;
export type TeamServiceGetTeamMediaByYearQueryResult<
  TData = TeamServiceGetTeamMediaByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamMediaByYearKey =
  "TeamServiceGetTeamMediaByYear";
export const UseTeamServiceGetTeamMediaByYearKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamMediaByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type TeamServiceGetTeamMediaByTagDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamMediaByTag>
>;
export type TeamServiceGetTeamMediaByTagQueryResult<
  TData = TeamServiceGetTeamMediaByTagDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamMediaByTagKey =
  "TeamServiceGetTeamMediaByTag";
export const UseTeamServiceGetTeamMediaByTagKeyFn = (
  {
    ifNoneMatch,
    mediaTag,
    teamKey,
  }: {
    ifNoneMatch?: string;
    mediaTag: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamMediaByTagKey,
  ...(queryKey ?? [{ ifNoneMatch, mediaTag, teamKey }]),
];
export type TeamServiceGetTeamMediaByTagYearDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamMediaByTagYear>
>;
export type TeamServiceGetTeamMediaByTagYearQueryResult<
  TData = TeamServiceGetTeamMediaByTagYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamMediaByTagYearKey =
  "TeamServiceGetTeamMediaByTagYear";
export const UseTeamServiceGetTeamMediaByTagYearKeyFn = (
  {
    ifNoneMatch,
    mediaTag,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    mediaTag: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamMediaByTagYearKey,
  ...(queryKey ?? [{ ifNoneMatch, mediaTag, teamKey, year }]),
];
export type TeamServiceGetTeamSocialMediaDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getTeamSocialMedia>
>;
export type TeamServiceGetTeamSocialMediaQueryResult<
  TData = TeamServiceGetTeamSocialMediaDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetTeamSocialMediaKey =
  "TeamServiceGetTeamSocialMedia";
export const UseTeamServiceGetTeamSocialMediaKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetTeamSocialMediaKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type TeamServiceGetEventTeamsDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getEventTeams>
>;
export type TeamServiceGetEventTeamsQueryResult<
  TData = TeamServiceGetEventTeamsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetEventTeamsKey = "TeamServiceGetEventTeams";
export const UseTeamServiceGetEventTeamsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetEventTeamsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type TeamServiceGetEventTeamsSimpleDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getEventTeamsSimple>
>;
export type TeamServiceGetEventTeamsSimpleQueryResult<
  TData = TeamServiceGetEventTeamsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetEventTeamsSimpleKey =
  "TeamServiceGetEventTeamsSimple";
export const UseTeamServiceGetEventTeamsSimpleKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetEventTeamsSimpleKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type TeamServiceGetEventTeamsKeysDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getEventTeamsKeys>
>;
export type TeamServiceGetEventTeamsKeysQueryResult<
  TData = TeamServiceGetEventTeamsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetEventTeamsKeysKey =
  "TeamServiceGetEventTeamsKeys";
export const UseTeamServiceGetEventTeamsKeysKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetEventTeamsKeysKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type TeamServiceGetEventTeamsStatusesDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getEventTeamsStatuses>
>;
export type TeamServiceGetEventTeamsStatusesQueryResult<
  TData = TeamServiceGetEventTeamsStatusesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetEventTeamsStatusesKey =
  "TeamServiceGetEventTeamsStatuses";
export const UseTeamServiceGetEventTeamsStatusesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetEventTeamsStatusesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type TeamServiceGetDistrictTeamsDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getDistrictTeams>
>;
export type TeamServiceGetDistrictTeamsQueryResult<
  TData = TeamServiceGetDistrictTeamsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetDistrictTeamsKey = "TeamServiceGetDistrictTeams";
export const UseTeamServiceGetDistrictTeamsKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetDistrictTeamsKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type TeamServiceGetDistrictTeamsSimpleDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getDistrictTeamsSimple>
>;
export type TeamServiceGetDistrictTeamsSimpleQueryResult<
  TData = TeamServiceGetDistrictTeamsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetDistrictTeamsSimpleKey =
  "TeamServiceGetDistrictTeamsSimple";
export const UseTeamServiceGetDistrictTeamsSimpleKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetDistrictTeamsSimpleKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type TeamServiceGetDistrictTeamsKeysDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getDistrictTeamsKeys>
>;
export type TeamServiceGetDistrictTeamsKeysQueryResult<
  TData = TeamServiceGetDistrictTeamsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetDistrictTeamsKeysKey =
  "TeamServiceGetDistrictTeamsKeys";
export const UseTeamServiceGetDistrictTeamsKeysKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetDistrictTeamsKeysKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type TeamServiceGetDistrictRankingsDefaultResponse = Awaited<
  ReturnType<typeof TeamService.getDistrictRankings>
>;
export type TeamServiceGetDistrictRankingsQueryResult<
  TData = TeamServiceGetDistrictRankingsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTeamServiceGetDistrictRankingsKey =
  "TeamServiceGetDistrictRankings";
export const UseTeamServiceGetDistrictRankingsKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useTeamServiceGetDistrictRankingsKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type ListServiceGetTeamsDefaultResponse = Awaited<
  ReturnType<typeof ListService.getTeams>
>;
export type ListServiceGetTeamsQueryResult<
  TData = ListServiceGetTeamsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetTeamsKey = "ListServiceGetTeams";
export const UseListServiceGetTeamsKeyFn = (
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: Array<unknown>,
) => [useListServiceGetTeamsKey, ...(queryKey ?? [{ ifNoneMatch, pageNum }])];
export type ListServiceGetTeamsSimpleDefaultResponse = Awaited<
  ReturnType<typeof ListService.getTeamsSimple>
>;
export type ListServiceGetTeamsSimpleQueryResult<
  TData = ListServiceGetTeamsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetTeamsSimpleKey = "ListServiceGetTeamsSimple";
export const UseListServiceGetTeamsSimpleKeyFn = (
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetTeamsSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum }]),
];
export type ListServiceGetTeamsKeysDefaultResponse = Awaited<
  ReturnType<typeof ListService.getTeamsKeys>
>;
export type ListServiceGetTeamsKeysQueryResult<
  TData = ListServiceGetTeamsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetTeamsKeysKey = "ListServiceGetTeamsKeys";
export const UseListServiceGetTeamsKeysKeyFn = (
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetTeamsKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum }]),
];
export type ListServiceGetTeamsByYearDefaultResponse = Awaited<
  ReturnType<typeof ListService.getTeamsByYear>
>;
export type ListServiceGetTeamsByYearQueryResult<
  TData = ListServiceGetTeamsByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetTeamsByYearKey = "ListServiceGetTeamsByYear";
export const UseListServiceGetTeamsByYearKeyFn = (
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetTeamsByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum, year }]),
];
export type ListServiceGetTeamsByYearSimpleDefaultResponse = Awaited<
  ReturnType<typeof ListService.getTeamsByYearSimple>
>;
export type ListServiceGetTeamsByYearSimpleQueryResult<
  TData = ListServiceGetTeamsByYearSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetTeamsByYearSimpleKey =
  "ListServiceGetTeamsByYearSimple";
export const UseListServiceGetTeamsByYearSimpleKeyFn = (
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetTeamsByYearSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum, year }]),
];
export type ListServiceGetTeamsByYearKeysDefaultResponse = Awaited<
  ReturnType<typeof ListService.getTeamsByYearKeys>
>;
export type ListServiceGetTeamsByYearKeysQueryResult<
  TData = ListServiceGetTeamsByYearKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetTeamsByYearKeysKey =
  "ListServiceGetTeamsByYearKeys";
export const UseListServiceGetTeamsByYearKeysKeyFn = (
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetTeamsByYearKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, pageNum, year }]),
];
export type ListServiceGetTeamEventsStatusesByYearDefaultResponse = Awaited<
  ReturnType<typeof ListService.getTeamEventsStatusesByYear>
>;
export type ListServiceGetTeamEventsStatusesByYearQueryResult<
  TData = ListServiceGetTeamEventsStatusesByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetTeamEventsStatusesByYearKey =
  "ListServiceGetTeamEventsStatusesByYear";
export const UseListServiceGetTeamEventsStatusesByYearKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetTeamEventsStatusesByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type ListServiceGetEventsByYearDefaultResponse = Awaited<
  ReturnType<typeof ListService.getEventsByYear>
>;
export type ListServiceGetEventsByYearQueryResult<
  TData = ListServiceGetEventsByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetEventsByYearKey = "ListServiceGetEventsByYear";
export const UseListServiceGetEventsByYearKeyFn = (
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetEventsByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, year }]),
];
export type ListServiceGetEventsByYearSimpleDefaultResponse = Awaited<
  ReturnType<typeof ListService.getEventsByYearSimple>
>;
export type ListServiceGetEventsByYearSimpleQueryResult<
  TData = ListServiceGetEventsByYearSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetEventsByYearSimpleKey =
  "ListServiceGetEventsByYearSimple";
export const UseListServiceGetEventsByYearSimpleKeyFn = (
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetEventsByYearSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, year }]),
];
export type ListServiceGetEventsByYearKeysDefaultResponse = Awaited<
  ReturnType<typeof ListService.getEventsByYearKeys>
>;
export type ListServiceGetEventsByYearKeysQueryResult<
  TData = ListServiceGetEventsByYearKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetEventsByYearKeysKey =
  "ListServiceGetEventsByYearKeys";
export const UseListServiceGetEventsByYearKeysKeyFn = (
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetEventsByYearKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, year }]),
];
export type ListServiceGetEventTeamsDefaultResponse = Awaited<
  ReturnType<typeof ListService.getEventTeams>
>;
export type ListServiceGetEventTeamsQueryResult<
  TData = ListServiceGetEventTeamsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetEventTeamsKey = "ListServiceGetEventTeams";
export const UseListServiceGetEventTeamsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetEventTeamsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type ListServiceGetEventTeamsSimpleDefaultResponse = Awaited<
  ReturnType<typeof ListService.getEventTeamsSimple>
>;
export type ListServiceGetEventTeamsSimpleQueryResult<
  TData = ListServiceGetEventTeamsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetEventTeamsSimpleKey =
  "ListServiceGetEventTeamsSimple";
export const UseListServiceGetEventTeamsSimpleKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetEventTeamsSimpleKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type ListServiceGetEventTeamsKeysDefaultResponse = Awaited<
  ReturnType<typeof ListService.getEventTeamsKeys>
>;
export type ListServiceGetEventTeamsKeysQueryResult<
  TData = ListServiceGetEventTeamsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetEventTeamsKeysKey =
  "ListServiceGetEventTeamsKeys";
export const UseListServiceGetEventTeamsKeysKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetEventTeamsKeysKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type ListServiceGetEventTeamsStatusesDefaultResponse = Awaited<
  ReturnType<typeof ListService.getEventTeamsStatuses>
>;
export type ListServiceGetEventTeamsStatusesQueryResult<
  TData = ListServiceGetEventTeamsStatusesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetEventTeamsStatusesKey =
  "ListServiceGetEventTeamsStatuses";
export const UseListServiceGetEventTeamsStatusesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetEventTeamsStatusesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type ListServiceGetDistrictEventsDefaultResponse = Awaited<
  ReturnType<typeof ListService.getDistrictEvents>
>;
export type ListServiceGetDistrictEventsQueryResult<
  TData = ListServiceGetDistrictEventsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetDistrictEventsKey =
  "ListServiceGetDistrictEvents";
export const UseListServiceGetDistrictEventsKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetDistrictEventsKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type ListServiceGetDistrictEventsSimpleDefaultResponse = Awaited<
  ReturnType<typeof ListService.getDistrictEventsSimple>
>;
export type ListServiceGetDistrictEventsSimpleQueryResult<
  TData = ListServiceGetDistrictEventsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetDistrictEventsSimpleKey =
  "ListServiceGetDistrictEventsSimple";
export const UseListServiceGetDistrictEventsSimpleKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetDistrictEventsSimpleKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type ListServiceGetDistrictEventsKeysDefaultResponse = Awaited<
  ReturnType<typeof ListService.getDistrictEventsKeys>
>;
export type ListServiceGetDistrictEventsKeysQueryResult<
  TData = ListServiceGetDistrictEventsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetDistrictEventsKeysKey =
  "ListServiceGetDistrictEventsKeys";
export const UseListServiceGetDistrictEventsKeysKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetDistrictEventsKeysKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type ListServiceGetDistrictTeamsDefaultResponse = Awaited<
  ReturnType<typeof ListService.getDistrictTeams>
>;
export type ListServiceGetDistrictTeamsQueryResult<
  TData = ListServiceGetDistrictTeamsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetDistrictTeamsKey = "ListServiceGetDistrictTeams";
export const UseListServiceGetDistrictTeamsKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetDistrictTeamsKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type ListServiceGetDistrictTeamsSimpleDefaultResponse = Awaited<
  ReturnType<typeof ListService.getDistrictTeamsSimple>
>;
export type ListServiceGetDistrictTeamsSimpleQueryResult<
  TData = ListServiceGetDistrictTeamsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetDistrictTeamsSimpleKey =
  "ListServiceGetDistrictTeamsSimple";
export const UseListServiceGetDistrictTeamsSimpleKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetDistrictTeamsSimpleKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type ListServiceGetDistrictTeamsKeysDefaultResponse = Awaited<
  ReturnType<typeof ListService.getDistrictTeamsKeys>
>;
export type ListServiceGetDistrictTeamsKeysQueryResult<
  TData = ListServiceGetDistrictTeamsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetDistrictTeamsKeysKey =
  "ListServiceGetDistrictTeamsKeys";
export const UseListServiceGetDistrictTeamsKeysKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetDistrictTeamsKeysKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type ListServiceGetDistrictRankingsDefaultResponse = Awaited<
  ReturnType<typeof ListService.getDistrictRankings>
>;
export type ListServiceGetDistrictRankingsQueryResult<
  TData = ListServiceGetDistrictRankingsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useListServiceGetDistrictRankingsKey =
  "ListServiceGetDistrictRankings";
export const UseListServiceGetDistrictRankingsKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useListServiceGetDistrictRankingsKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type DistrictServiceGetTeamDistrictsDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getTeamDistricts>
>;
export type DistrictServiceGetTeamDistrictsQueryResult<
  TData = DistrictServiceGetTeamDistrictsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetTeamDistrictsKey =
  "DistrictServiceGetTeamDistricts";
export const UseDistrictServiceGetTeamDistrictsKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetTeamDistrictsKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type DistrictServiceGetEventDistrictPointsDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getEventDistrictPoints>
>;
export type DistrictServiceGetEventDistrictPointsQueryResult<
  TData = DistrictServiceGetEventDistrictPointsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetEventDistrictPointsKey =
  "DistrictServiceGetEventDistrictPoints";
export const UseDistrictServiceGetEventDistrictPointsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetEventDistrictPointsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type DistrictServiceGetDistrictsByYearDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getDistrictsByYear>
>;
export type DistrictServiceGetDistrictsByYearQueryResult<
  TData = DistrictServiceGetDistrictsByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetDistrictsByYearKey =
  "DistrictServiceGetDistrictsByYear";
export const UseDistrictServiceGetDistrictsByYearKeyFn = (
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetDistrictsByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, year }]),
];
export type DistrictServiceGetDistrictEventsDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getDistrictEvents>
>;
export type DistrictServiceGetDistrictEventsQueryResult<
  TData = DistrictServiceGetDistrictEventsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetDistrictEventsKey =
  "DistrictServiceGetDistrictEvents";
export const UseDistrictServiceGetDistrictEventsKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetDistrictEventsKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type DistrictServiceGetDistrictEventsSimpleDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getDistrictEventsSimple>
>;
export type DistrictServiceGetDistrictEventsSimpleQueryResult<
  TData = DistrictServiceGetDistrictEventsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetDistrictEventsSimpleKey =
  "DistrictServiceGetDistrictEventsSimple";
export const UseDistrictServiceGetDistrictEventsSimpleKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetDistrictEventsSimpleKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type DistrictServiceGetDistrictEventsKeysDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getDistrictEventsKeys>
>;
export type DistrictServiceGetDistrictEventsKeysQueryResult<
  TData = DistrictServiceGetDistrictEventsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetDistrictEventsKeysKey =
  "DistrictServiceGetDistrictEventsKeys";
export const UseDistrictServiceGetDistrictEventsKeysKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetDistrictEventsKeysKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type DistrictServiceGetDistrictTeamsDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getDistrictTeams>
>;
export type DistrictServiceGetDistrictTeamsQueryResult<
  TData = DistrictServiceGetDistrictTeamsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetDistrictTeamsKey =
  "DistrictServiceGetDistrictTeams";
export const UseDistrictServiceGetDistrictTeamsKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetDistrictTeamsKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type DistrictServiceGetDistrictTeamsSimpleDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getDistrictTeamsSimple>
>;
export type DistrictServiceGetDistrictTeamsSimpleQueryResult<
  TData = DistrictServiceGetDistrictTeamsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetDistrictTeamsSimpleKey =
  "DistrictServiceGetDistrictTeamsSimple";
export const UseDistrictServiceGetDistrictTeamsSimpleKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetDistrictTeamsSimpleKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type DistrictServiceGetDistrictTeamsKeysDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getDistrictTeamsKeys>
>;
export type DistrictServiceGetDistrictTeamsKeysQueryResult<
  TData = DistrictServiceGetDistrictTeamsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetDistrictTeamsKeysKey =
  "DistrictServiceGetDistrictTeamsKeys";
export const UseDistrictServiceGetDistrictTeamsKeysKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetDistrictTeamsKeysKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type DistrictServiceGetDistrictRankingsDefaultResponse = Awaited<
  ReturnType<typeof DistrictService.getDistrictRankings>
>;
export type DistrictServiceGetDistrictRankingsQueryResult<
  TData = DistrictServiceGetDistrictRankingsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDistrictServiceGetDistrictRankingsKey =
  "DistrictServiceGetDistrictRankings";
export const UseDistrictServiceGetDistrictRankingsKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useDistrictServiceGetDistrictRankingsKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type EventServiceGetTeamEventsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEvents>
>;
export type EventServiceGetTeamEventsQueryResult<
  TData = EventServiceGetTeamEventsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventsKey = "EventServiceGetTeamEvents";
export const UseEventServiceGetTeamEventsKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventsKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type EventServiceGetTeamEventsSimpleDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventsSimple>
>;
export type EventServiceGetTeamEventsSimpleQueryResult<
  TData = EventServiceGetTeamEventsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventsSimpleKey =
  "EventServiceGetTeamEventsSimple";
export const UseEventServiceGetTeamEventsSimpleKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventsSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type EventServiceGetTeamEventsKeysDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventsKeys>
>;
export type EventServiceGetTeamEventsKeysQueryResult<
  TData = EventServiceGetTeamEventsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventsKeysKey =
  "EventServiceGetTeamEventsKeys";
export const UseEventServiceGetTeamEventsKeysKeyFn = (
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventsKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey }]),
];
export type EventServiceGetTeamEventsByYearDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventsByYear>
>;
export type EventServiceGetTeamEventsByYearQueryResult<
  TData = EventServiceGetTeamEventsByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventsByYearKey =
  "EventServiceGetTeamEventsByYear";
export const UseEventServiceGetTeamEventsByYearKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventsByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type EventServiceGetTeamEventsByYearSimpleDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventsByYearSimple>
>;
export type EventServiceGetTeamEventsByYearSimpleQueryResult<
  TData = EventServiceGetTeamEventsByYearSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventsByYearSimpleKey =
  "EventServiceGetTeamEventsByYearSimple";
export const UseEventServiceGetTeamEventsByYearSimpleKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventsByYearSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type EventServiceGetTeamEventsByYearKeysDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventsByYearKeys>
>;
export type EventServiceGetTeamEventsByYearKeysQueryResult<
  TData = EventServiceGetTeamEventsByYearKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventsByYearKeysKey =
  "EventServiceGetTeamEventsByYearKeys";
export const UseEventServiceGetTeamEventsByYearKeysKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventsByYearKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type EventServiceGetTeamEventsStatusesByYearDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventsStatusesByYear>
>;
export type EventServiceGetTeamEventsStatusesByYearQueryResult<
  TData = EventServiceGetTeamEventsStatusesByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventsStatusesByYearKey =
  "EventServiceGetTeamEventsStatusesByYear";
export const UseEventServiceGetTeamEventsStatusesByYearKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventsStatusesByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type EventServiceGetTeamEventMatchesDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventMatches>
>;
export type EventServiceGetTeamEventMatchesQueryResult<
  TData = EventServiceGetTeamEventMatchesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventMatchesKey =
  "EventServiceGetTeamEventMatches";
export const UseEventServiceGetTeamEventMatchesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventMatchesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type EventServiceGetTeamEventMatchesSimpleDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventMatchesSimple>
>;
export type EventServiceGetTeamEventMatchesSimpleQueryResult<
  TData = EventServiceGetTeamEventMatchesSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventMatchesSimpleKey =
  "EventServiceGetTeamEventMatchesSimple";
export const UseEventServiceGetTeamEventMatchesSimpleKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventMatchesSimpleKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type EventServiceGetTeamEventMatchesKeysDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventMatchesKeys>
>;
export type EventServiceGetTeamEventMatchesKeysQueryResult<
  TData = EventServiceGetTeamEventMatchesKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventMatchesKeysKey =
  "EventServiceGetTeamEventMatchesKeys";
export const UseEventServiceGetTeamEventMatchesKeysKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventMatchesKeysKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type EventServiceGetTeamEventAwardsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventAwards>
>;
export type EventServiceGetTeamEventAwardsQueryResult<
  TData = EventServiceGetTeamEventAwardsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventAwardsKey =
  "EventServiceGetTeamEventAwards";
export const UseEventServiceGetTeamEventAwardsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventAwardsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type EventServiceGetTeamEventStatusDefaultResponse = Awaited<
  ReturnType<typeof EventService.getTeamEventStatus>
>;
export type EventServiceGetTeamEventStatusQueryResult<
  TData = EventServiceGetTeamEventStatusDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetTeamEventStatusKey =
  "EventServiceGetTeamEventStatus";
export const UseEventServiceGetTeamEventStatusKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetTeamEventStatusKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type EventServiceGetEventsByYearDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventsByYear>
>;
export type EventServiceGetEventsByYearQueryResult<
  TData = EventServiceGetEventsByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventsByYearKey = "EventServiceGetEventsByYear";
export const UseEventServiceGetEventsByYearKeyFn = (
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventsByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, year }]),
];
export type EventServiceGetEventsByYearSimpleDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventsByYearSimple>
>;
export type EventServiceGetEventsByYearSimpleQueryResult<
  TData = EventServiceGetEventsByYearSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventsByYearSimpleKey =
  "EventServiceGetEventsByYearSimple";
export const UseEventServiceGetEventsByYearSimpleKeyFn = (
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventsByYearSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, year }]),
];
export type EventServiceGetEventsByYearKeysDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventsByYearKeys>
>;
export type EventServiceGetEventsByYearKeysQueryResult<
  TData = EventServiceGetEventsByYearKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventsByYearKeysKey =
  "EventServiceGetEventsByYearKeys";
export const UseEventServiceGetEventsByYearKeysKeyFn = (
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventsByYearKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, year }]),
];
export type EventServiceGetEventDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEvent>
>;
export type EventServiceGetEventQueryResult<
  TData = EventServiceGetEventDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventKey = "EventServiceGetEvent";
export const UseEventServiceGetEventKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [useEventServiceGetEventKey, ...(queryKey ?? [{ eventKey, ifNoneMatch }])];
export type EventServiceGetEventSimpleDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventSimple>
>;
export type EventServiceGetEventSimpleQueryResult<
  TData = EventServiceGetEventSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventSimpleKey = "EventServiceGetEventSimple";
export const UseEventServiceGetEventSimpleKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventSimpleKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventAlliancesDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventAlliances>
>;
export type EventServiceGetEventAlliancesQueryResult<
  TData = EventServiceGetEventAlliancesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventAlliancesKey =
  "EventServiceGetEventAlliances";
export const UseEventServiceGetEventAlliancesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventAlliancesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventInsightsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventInsights>
>;
export type EventServiceGetEventInsightsQueryResult<
  TData = EventServiceGetEventInsightsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventInsightsKey =
  "EventServiceGetEventInsights";
export const UseEventServiceGetEventInsightsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventInsightsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventOpRsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventOpRs>
>;
export type EventServiceGetEventOpRsQueryResult<
  TData = EventServiceGetEventOpRsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventOpRsKey = "EventServiceGetEventOpRs";
export const UseEventServiceGetEventOpRsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventOpRsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventCopRsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventCopRs>
>;
export type EventServiceGetEventCopRsQueryResult<
  TData = EventServiceGetEventCopRsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventCopRsKey = "EventServiceGetEventCopRs";
export const UseEventServiceGetEventCopRsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventCopRsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventPredictionsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventPredictions>
>;
export type EventServiceGetEventPredictionsQueryResult<
  TData = EventServiceGetEventPredictionsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventPredictionsKey =
  "EventServiceGetEventPredictions";
export const UseEventServiceGetEventPredictionsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventPredictionsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventRankingsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventRankings>
>;
export type EventServiceGetEventRankingsQueryResult<
  TData = EventServiceGetEventRankingsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventRankingsKey =
  "EventServiceGetEventRankings";
export const UseEventServiceGetEventRankingsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventRankingsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventDistrictPointsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventDistrictPoints>
>;
export type EventServiceGetEventDistrictPointsQueryResult<
  TData = EventServiceGetEventDistrictPointsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventDistrictPointsKey =
  "EventServiceGetEventDistrictPoints";
export const UseEventServiceGetEventDistrictPointsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventDistrictPointsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventTeamsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventTeams>
>;
export type EventServiceGetEventTeamsQueryResult<
  TData = EventServiceGetEventTeamsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventTeamsKey = "EventServiceGetEventTeams";
export const UseEventServiceGetEventTeamsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventTeamsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventTeamsSimpleDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventTeamsSimple>
>;
export type EventServiceGetEventTeamsSimpleQueryResult<
  TData = EventServiceGetEventTeamsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventTeamsSimpleKey =
  "EventServiceGetEventTeamsSimple";
export const UseEventServiceGetEventTeamsSimpleKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventTeamsSimpleKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventTeamsKeysDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventTeamsKeys>
>;
export type EventServiceGetEventTeamsKeysQueryResult<
  TData = EventServiceGetEventTeamsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventTeamsKeysKey =
  "EventServiceGetEventTeamsKeys";
export const UseEventServiceGetEventTeamsKeysKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventTeamsKeysKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventTeamsStatusesDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventTeamsStatuses>
>;
export type EventServiceGetEventTeamsStatusesQueryResult<
  TData = EventServiceGetEventTeamsStatusesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventTeamsStatusesKey =
  "EventServiceGetEventTeamsStatuses";
export const UseEventServiceGetEventTeamsStatusesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventTeamsStatusesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventMatchesDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventMatches>
>;
export type EventServiceGetEventMatchesQueryResult<
  TData = EventServiceGetEventMatchesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventMatchesKey = "EventServiceGetEventMatches";
export const UseEventServiceGetEventMatchesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventMatchesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventMatchesSimpleDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventMatchesSimple>
>;
export type EventServiceGetEventMatchesSimpleQueryResult<
  TData = EventServiceGetEventMatchesSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventMatchesSimpleKey =
  "EventServiceGetEventMatchesSimple";
export const UseEventServiceGetEventMatchesSimpleKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventMatchesSimpleKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventMatchesKeysDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventMatchesKeys>
>;
export type EventServiceGetEventMatchesKeysQueryResult<
  TData = EventServiceGetEventMatchesKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventMatchesKeysKey =
  "EventServiceGetEventMatchesKeys";
export const UseEventServiceGetEventMatchesKeysKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventMatchesKeysKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventMatchTimeseriesDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventMatchTimeseries>
>;
export type EventServiceGetEventMatchTimeseriesQueryResult<
  TData = EventServiceGetEventMatchTimeseriesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventMatchTimeseriesKey =
  "EventServiceGetEventMatchTimeseries";
export const UseEventServiceGetEventMatchTimeseriesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventMatchTimeseriesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetEventAwardsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getEventAwards>
>;
export type EventServiceGetEventAwardsQueryResult<
  TData = EventServiceGetEventAwardsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetEventAwardsKey = "EventServiceGetEventAwards";
export const UseEventServiceGetEventAwardsKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetEventAwardsKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type EventServiceGetDistrictEventsDefaultResponse = Awaited<
  ReturnType<typeof EventService.getDistrictEvents>
>;
export type EventServiceGetDistrictEventsQueryResult<
  TData = EventServiceGetDistrictEventsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetDistrictEventsKey =
  "EventServiceGetDistrictEvents";
export const UseEventServiceGetDistrictEventsKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetDistrictEventsKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type EventServiceGetDistrictEventsSimpleDefaultResponse = Awaited<
  ReturnType<typeof EventService.getDistrictEventsSimple>
>;
export type EventServiceGetDistrictEventsSimpleQueryResult<
  TData = EventServiceGetDistrictEventsSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetDistrictEventsSimpleKey =
  "EventServiceGetDistrictEventsSimple";
export const UseEventServiceGetDistrictEventsSimpleKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetDistrictEventsSimpleKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type EventServiceGetDistrictEventsKeysDefaultResponse = Awaited<
  ReturnType<typeof EventService.getDistrictEventsKeys>
>;
export type EventServiceGetDistrictEventsKeysQueryResult<
  TData = EventServiceGetDistrictEventsKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useEventServiceGetDistrictEventsKeysKey =
  "EventServiceGetDistrictEventsKeys";
export const UseEventServiceGetDistrictEventsKeysKeyFn = (
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useEventServiceGetDistrictEventsKeysKey,
  ...(queryKey ?? [{ districtKey, ifNoneMatch }]),
];
export type MatchServiceGetTeamEventMatchesDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getTeamEventMatches>
>;
export type MatchServiceGetTeamEventMatchesQueryResult<
  TData = MatchServiceGetTeamEventMatchesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetTeamEventMatchesKey =
  "MatchServiceGetTeamEventMatches";
export const UseMatchServiceGetTeamEventMatchesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetTeamEventMatchesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type MatchServiceGetTeamEventMatchesSimpleDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getTeamEventMatchesSimple>
>;
export type MatchServiceGetTeamEventMatchesSimpleQueryResult<
  TData = MatchServiceGetTeamEventMatchesSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetTeamEventMatchesSimpleKey =
  "MatchServiceGetTeamEventMatchesSimple";
export const UseMatchServiceGetTeamEventMatchesSimpleKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetTeamEventMatchesSimpleKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type MatchServiceGetTeamEventMatchesKeysDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getTeamEventMatchesKeys>
>;
export type MatchServiceGetTeamEventMatchesKeysQueryResult<
  TData = MatchServiceGetTeamEventMatchesKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetTeamEventMatchesKeysKey =
  "MatchServiceGetTeamEventMatchesKeys";
export const UseMatchServiceGetTeamEventMatchesKeysKeyFn = (
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetTeamEventMatchesKeysKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch, teamKey }]),
];
export type MatchServiceGetTeamMatchesByYearDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getTeamMatchesByYear>
>;
export type MatchServiceGetTeamMatchesByYearQueryResult<
  TData = MatchServiceGetTeamMatchesByYearDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetTeamMatchesByYearKey =
  "MatchServiceGetTeamMatchesByYear";
export const UseMatchServiceGetTeamMatchesByYearKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetTeamMatchesByYearKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type MatchServiceGetTeamMatchesByYearSimpleDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getTeamMatchesByYearSimple>
>;
export type MatchServiceGetTeamMatchesByYearSimpleQueryResult<
  TData = MatchServiceGetTeamMatchesByYearSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetTeamMatchesByYearSimpleKey =
  "MatchServiceGetTeamMatchesByYearSimple";
export const UseMatchServiceGetTeamMatchesByYearSimpleKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetTeamMatchesByYearSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type MatchServiceGetTeamMatchesByYearKeysDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getTeamMatchesByYearKeys>
>;
export type MatchServiceGetTeamMatchesByYearKeysQueryResult<
  TData = MatchServiceGetTeamMatchesByYearKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetTeamMatchesByYearKeysKey =
  "MatchServiceGetTeamMatchesByYearKeys";
export const UseMatchServiceGetTeamMatchesByYearKeysKeyFn = (
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetTeamMatchesByYearKeysKey,
  ...(queryKey ?? [{ ifNoneMatch, teamKey, year }]),
];
export type MatchServiceGetEventMatchesDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getEventMatches>
>;
export type MatchServiceGetEventMatchesQueryResult<
  TData = MatchServiceGetEventMatchesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetEventMatchesKey = "MatchServiceGetEventMatches";
export const UseMatchServiceGetEventMatchesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetEventMatchesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type MatchServiceGetEventMatchesSimpleDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getEventMatchesSimple>
>;
export type MatchServiceGetEventMatchesSimpleQueryResult<
  TData = MatchServiceGetEventMatchesSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetEventMatchesSimpleKey =
  "MatchServiceGetEventMatchesSimple";
export const UseMatchServiceGetEventMatchesSimpleKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetEventMatchesSimpleKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type MatchServiceGetEventMatchesKeysDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getEventMatchesKeys>
>;
export type MatchServiceGetEventMatchesKeysQueryResult<
  TData = MatchServiceGetEventMatchesKeysDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetEventMatchesKeysKey =
  "MatchServiceGetEventMatchesKeys";
export const UseMatchServiceGetEventMatchesKeysKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetEventMatchesKeysKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type MatchServiceGetEventMatchTimeseriesDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getEventMatchTimeseries>
>;
export type MatchServiceGetEventMatchTimeseriesQueryResult<
  TData = MatchServiceGetEventMatchTimeseriesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetEventMatchTimeseriesKey =
  "MatchServiceGetEventMatchTimeseries";
export const UseMatchServiceGetEventMatchTimeseriesKeyFn = (
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetEventMatchTimeseriesKey,
  ...(queryKey ?? [{ eventKey, ifNoneMatch }]),
];
export type MatchServiceGetMatchDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getMatch>
>;
export type MatchServiceGetMatchQueryResult<
  TData = MatchServiceGetMatchDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetMatchKey = "MatchServiceGetMatch";
export const UseMatchServiceGetMatchKeyFn = (
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
  queryKey?: Array<unknown>,
) => [useMatchServiceGetMatchKey, ...(queryKey ?? [{ ifNoneMatch, matchKey }])];
export type MatchServiceGetMatchSimpleDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getMatchSimple>
>;
export type MatchServiceGetMatchSimpleQueryResult<
  TData = MatchServiceGetMatchSimpleDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetMatchSimpleKey = "MatchServiceGetMatchSimple";
export const UseMatchServiceGetMatchSimpleKeyFn = (
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetMatchSimpleKey,
  ...(queryKey ?? [{ ifNoneMatch, matchKey }]),
];
export type MatchServiceGetMatchTimeseriesDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getMatchTimeseries>
>;
export type MatchServiceGetMatchTimeseriesQueryResult<
  TData = MatchServiceGetMatchTimeseriesDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetMatchTimeseriesKey =
  "MatchServiceGetMatchTimeseries";
export const UseMatchServiceGetMatchTimeseriesKeyFn = (
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetMatchTimeseriesKey,
  ...(queryKey ?? [{ ifNoneMatch, matchKey }]),
];
export type MatchServiceGetMatchZebraDefaultResponse = Awaited<
  ReturnType<typeof MatchService.getMatchZebra>
>;
export type MatchServiceGetMatchZebraQueryResult<
  TData = MatchServiceGetMatchZebraDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMatchServiceGetMatchZebraKey = "MatchServiceGetMatchZebra";
export const UseMatchServiceGetMatchZebraKeyFn = (
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
  queryKey?: Array<unknown>,
) => [
  useMatchServiceGetMatchZebraKey,
  ...(queryKey ?? [{ ifNoneMatch, matchKey }]),
];
