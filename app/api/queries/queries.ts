// generated with @7nohe/openapi-react-query-codegen@1.4.1

import { type UseQueryOptions, useQuery } from "@tanstack/react-query";
import {
  DistrictService,
  EventService,
  ListService,
  MatchService,
  TbaService,
  TeamService,
} from "../requests/services.gen";
import * as Common from "./common";
export const useTbaServiceGetStatus = <
  TData = Common.TbaServiceGetStatusDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
  }: {
    ifNoneMatch?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTbaServiceGetStatusKeyFn({ ifNoneMatch }, queryKey),
    queryFn: () => TbaService.getStatus({ ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetTeams = <
  TData = Common.TeamServiceGetTeamsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () => TeamService.getTeams({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsSimple = <
  TData = Common.TeamServiceGetTeamsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsSimpleKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamsSimple({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsKeys = <
  TData = Common.TeamServiceGetTeamsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsKeysKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamsKeys({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsByYear = <
  TData = Common.TeamServiceGetTeamsByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsByYearKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamsByYear({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsByYearSimple = <
  TData = Common.TeamServiceGetTeamsByYearSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsByYearSimpleKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamsByYearSimple({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsByYearKeys = <
  TData = Common.TeamServiceGetTeamsByYearKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsByYearKeysKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamsByYearKeys({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeam = <
  TData = Common.TeamServiceGetTeamDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeam({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamSimple = <
  TData = Common.TeamServiceGetTeamSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamSimpleKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamSimple({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamYearsParticipated = <
  TData = Common.TeamServiceGetTeamYearsParticipatedDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamYearsParticipatedKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamYearsParticipated({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamDistricts = <
  TData = Common.TeamServiceGetTeamDistrictsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamDistrictsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamDistricts({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamRobots = <
  TData = Common.TeamServiceGetTeamRobotsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamRobotsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamRobots({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEvents = <
  TData = Common.TeamServiceGetTeamEventsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamEvents({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsSimple = <
  TData = Common.TeamServiceGetTeamEventsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsSimpleKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventsSimple({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsKeys = <
  TData = Common.TeamServiceGetTeamEventsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsKeysKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventsKeys({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsByYear = <
  TData = Common.TeamServiceGetTeamEventsByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventsByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsByYearSimple = <
  TData = Common.TeamServiceGetTeamEventsByYearSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsByYearSimpleKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventsByYearSimple({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsByYearKeys = <
  TData = Common.TeamServiceGetTeamEventsByYearKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsByYearKeysKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventsByYearKeys({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsStatusesByYear = <
  TData = Common.TeamServiceGetTeamEventsStatusesByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsStatusesByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventsStatusesByYear({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventMatches = <
  TData = Common.TeamServiceGetTeamEventMatchesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventMatchesKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventMatches({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventMatchesSimple = <
  TData = Common.TeamServiceGetTeamEventMatchesSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventMatchesSimpleKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventMatchesSimple({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventMatchesKeys = <
  TData = Common.TeamServiceGetTeamEventMatchesKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventMatchesKeysKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventMatchesKeys({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventAwards = <
  TData = Common.TeamServiceGetTeamEventAwardsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventAwardsKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventAwards({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventStatus = <
  TData = Common.TeamServiceGetTeamEventStatusDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventStatusKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventStatus({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamAwards = <
  TData = Common.TeamServiceGetTeamAwardsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamAwardsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamAwards({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamAwardsByYear = <
  TData = Common.TeamServiceGetTeamAwardsByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamAwardsByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamAwardsByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamMatchesByYear = <
  TData = Common.TeamServiceGetTeamMatchesByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamMatchesByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamMatchesByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamMatchesByYearSimple = <
  TData = Common.TeamServiceGetTeamMatchesByYearSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamMatchesByYearSimpleKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamMatchesByYearSimple({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamMatchesByYearKeys = <
  TData = Common.TeamServiceGetTeamMatchesByYearKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamMatchesByYearKeysKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamMatchesByYearKeys({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamMediaByYear = <
  TData = Common.TeamServiceGetTeamMediaByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamMediaByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamMediaByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamMediaByTag = <
  TData = Common.TeamServiceGetTeamMediaByTagDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    mediaTag,
    teamKey,
  }: {
    ifNoneMatch?: string;
    mediaTag: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamMediaByTagKeyFn(
      { ifNoneMatch, mediaTag, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamMediaByTag({
        ifNoneMatch,
        mediaTag,
        teamKey,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamMediaByTagYear = <
  TData = Common.TeamServiceGetTeamMediaByTagYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
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
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamMediaByTagYearKeyFn(
      { ifNoneMatch, mediaTag, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamMediaByTagYear({
        ifNoneMatch,
        mediaTag,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamSocialMedia = <
  TData = Common.TeamServiceGetTeamSocialMediaDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamSocialMediaKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamSocialMedia({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetEventTeams = <
  TData = Common.TeamServiceGetEventTeamsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetEventTeamsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getEventTeams({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetEventTeamsSimple = <
  TData = Common.TeamServiceGetEventTeamsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetEventTeamsSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getEventTeamsSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetEventTeamsKeys = <
  TData = Common.TeamServiceGetEventTeamsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetEventTeamsKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getEventTeamsKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetEventTeamsStatuses = <
  TData = Common.TeamServiceGetEventTeamsStatusesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetEventTeamsStatusesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getEventTeamsStatuses({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetDistrictTeams = <
  TData = Common.TeamServiceGetDistrictTeamsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetDistrictTeamsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getDistrictTeams({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetDistrictTeamsSimple = <
  TData = Common.TeamServiceGetDistrictTeamsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetDistrictTeamsSimpleKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getDistrictTeamsSimple({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetDistrictTeamsKeys = <
  TData = Common.TeamServiceGetDistrictTeamsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetDistrictTeamsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getDistrictTeamsKeys({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetDistrictRankings = <
  TData = Common.TeamServiceGetDistrictRankingsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetDistrictRankingsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getDistrictRankings({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetTeams = <
  TData = Common.ListServiceGetTeamsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () => ListService.getTeams({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useListServiceGetTeamsSimple = <
  TData = Common.ListServiceGetTeamsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsSimpleKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () =>
      ListService.getTeamsSimple({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useListServiceGetTeamsKeys = <
  TData = Common.ListServiceGetTeamsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsKeysKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () => ListService.getTeamsKeys({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useListServiceGetTeamsByYear = <
  TData = Common.ListServiceGetTeamsByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsByYearKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getTeamsByYear({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useListServiceGetTeamsByYearSimple = <
  TData = Common.ListServiceGetTeamsByYearSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsByYearSimpleKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getTeamsByYearSimple({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useListServiceGetTeamsByYearKeys = <
  TData = Common.ListServiceGetTeamsByYearKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsByYearKeysKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getTeamsByYearKeys({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useListServiceGetTeamEventsStatusesByYear = <
  TData = Common.ListServiceGetTeamEventsStatusesByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamEventsStatusesByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getTeamEventsStatusesByYear({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useListServiceGetEventsByYear = <
  TData = Common.ListServiceGetEventsByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventsByYearKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () => ListService.getEventsByYear({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useListServiceGetEventsByYearSimple = <
  TData = Common.ListServiceGetEventsByYearSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventsByYearSimpleKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventsByYearSimple({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useListServiceGetEventsByYearKeys = <
  TData = Common.ListServiceGetEventsByYearKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventsByYearKeysKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventsByYearKeys({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useListServiceGetEventTeams = <
  TData = Common.ListServiceGetEventTeamsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventTeamsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventTeams({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetEventTeamsSimple = <
  TData = Common.ListServiceGetEventTeamsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventTeamsSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventTeamsSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetEventTeamsKeys = <
  TData = Common.ListServiceGetEventTeamsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventTeamsKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventTeamsKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetEventTeamsStatuses = <
  TData = Common.ListServiceGetEventTeamsStatusesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventTeamsStatusesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventTeamsStatuses({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictEvents = <
  TData = Common.ListServiceGetDistrictEventsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictEventsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictEvents({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictEventsSimple = <
  TData = Common.ListServiceGetDistrictEventsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictEventsSimpleKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictEventsSimple({
        districtKey,
        ifNoneMatch,
      }) as TData,
    ...options,
  });
export const useListServiceGetDistrictEventsKeys = <
  TData = Common.ListServiceGetDistrictEventsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictEventsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictEventsKeys({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictTeams = <
  TData = Common.ListServiceGetDistrictTeamsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictTeamsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictTeams({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictTeamsSimple = <
  TData = Common.ListServiceGetDistrictTeamsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictTeamsSimpleKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictTeamsSimple({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictTeamsKeys = <
  TData = Common.ListServiceGetDistrictTeamsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictTeamsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictTeamsKeys({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictRankings = <
  TData = Common.ListServiceGetDistrictRankingsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictRankingsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictRankings({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useDistrictServiceGetTeamDistricts = <
  TData = Common.DistrictServiceGetTeamDistrictsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetTeamDistrictsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getTeamDistricts({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useDistrictServiceGetEventDistrictPoints = <
  TData = Common.DistrictServiceGetEventDistrictPointsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetEventDistrictPointsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getEventDistrictPoints({
        eventKey,
        ifNoneMatch,
      }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictsByYear = <
  TData = Common.DistrictServiceGetDistrictsByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictsByYearKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictsByYear({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictEvents = <
  TData = Common.DistrictServiceGetDistrictEventsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictEventsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictEvents({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictEventsSimple = <
  TData = Common.DistrictServiceGetDistrictEventsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictEventsSimpleKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictEventsSimple({
        districtKey,
        ifNoneMatch,
      }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictEventsKeys = <
  TData = Common.DistrictServiceGetDistrictEventsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictEventsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictEventsKeys({
        districtKey,
        ifNoneMatch,
      }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictTeams = <
  TData = Common.DistrictServiceGetDistrictTeamsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictTeamsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictTeams({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictTeamsSimple = <
  TData = Common.DistrictServiceGetDistrictTeamsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictTeamsSimpleKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictTeamsSimple({
        districtKey,
        ifNoneMatch,
      }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictTeamsKeys = <
  TData = Common.DistrictServiceGetDistrictTeamsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictTeamsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictTeamsKeys({
        districtKey,
        ifNoneMatch,
      }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictRankings = <
  TData = Common.DistrictServiceGetDistrictRankingsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictRankingsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictRankings({
        districtKey,
        ifNoneMatch,
      }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEvents = <
  TData = Common.EventServiceGetTeamEventsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEvents({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsSimple = <
  TData = Common.EventServiceGetTeamEventsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsSimpleKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventsSimple({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsKeys = <
  TData = Common.EventServiceGetTeamEventsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsKeysKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventsKeys({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsByYear = <
  TData = Common.EventServiceGetTeamEventsByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventsByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsByYearSimple = <
  TData = Common.EventServiceGetTeamEventsByYearSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsByYearSimpleKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventsByYearSimple({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsByYearKeys = <
  TData = Common.EventServiceGetTeamEventsByYearKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsByYearKeysKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventsByYearKeys({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsStatusesByYear = <
  TData = Common.EventServiceGetTeamEventsStatusesByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsStatusesByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventsStatusesByYear({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventMatches = <
  TData = Common.EventServiceGetTeamEventMatchesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventMatchesKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventMatches({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventMatchesSimple = <
  TData = Common.EventServiceGetTeamEventMatchesSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventMatchesSimpleKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventMatchesSimple({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventMatchesKeys = <
  TData = Common.EventServiceGetTeamEventMatchesKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventMatchesKeysKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventMatchesKeys({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventAwards = <
  TData = Common.EventServiceGetTeamEventAwardsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventAwardsKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventAwards({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventStatus = <
  TData = Common.EventServiceGetTeamEventStatusDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventStatusKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventStatus({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useEventServiceGetEventsByYear = <
  TData = Common.EventServiceGetEventsByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventsByYearKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () => EventService.getEventsByYear({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useEventServiceGetEventsByYearSimple = <
  TData = Common.EventServiceGetEventsByYearSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventsByYearSimpleKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventsByYearSimple({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useEventServiceGetEventsByYearKeys = <
  TData = Common.EventServiceGetEventsByYearKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventsByYearKeysKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventsByYearKeys({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useEventServiceGetEvent = <
  TData = Common.EventServiceGetEventDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () => EventService.getEvent({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventSimple = <
  TData = Common.EventServiceGetEventSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventAlliances = <
  TData = Common.EventServiceGetEventAlliancesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventAlliancesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventAlliances({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventInsights = <
  TData = Common.EventServiceGetEventInsightsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventInsightsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventInsights({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventOpRs = <
  TData = Common.EventServiceGetEventOpRsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventOpRsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventOpRs({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventCopRs = <
  TData = Common.EventServiceGetEventCopRsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventCopRsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventCopRs({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventPredictions = <
  TData = Common.EventServiceGetEventPredictionsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventPredictionsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventPredictions({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventRankings = <
  TData = Common.EventServiceGetEventRankingsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventRankingsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventRankings({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventDistrictPoints = <
  TData = Common.EventServiceGetEventDistrictPointsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventDistrictPointsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventDistrictPoints({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventTeams = <
  TData = Common.EventServiceGetEventTeamsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventTeamsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventTeams({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventTeamsSimple = <
  TData = Common.EventServiceGetEventTeamsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventTeamsSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventTeamsSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventTeamsKeys = <
  TData = Common.EventServiceGetEventTeamsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventTeamsKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventTeamsKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventTeamsStatuses = <
  TData = Common.EventServiceGetEventTeamsStatusesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventTeamsStatusesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventTeamsStatuses({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventMatches = <
  TData = Common.EventServiceGetEventMatchesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventMatchesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventMatches({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventMatchesSimple = <
  TData = Common.EventServiceGetEventMatchesSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventMatchesSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventMatchesSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventMatchesKeys = <
  TData = Common.EventServiceGetEventMatchesKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventMatchesKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventMatchesKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventMatchTimeseries = <
  TData = Common.EventServiceGetEventMatchTimeseriesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventMatchTimeseriesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventMatchTimeseries({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventAwards = <
  TData = Common.EventServiceGetEventAwardsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventAwardsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventAwards({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetDistrictEvents = <
  TData = Common.EventServiceGetDistrictEventsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetDistrictEventsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getDistrictEvents({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetDistrictEventsSimple = <
  TData = Common.EventServiceGetDistrictEventsSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetDistrictEventsSimpleKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getDistrictEventsSimple({
        districtKey,
        ifNoneMatch,
      }) as TData,
    ...options,
  });
export const useEventServiceGetDistrictEventsKeys = <
  TData = Common.EventServiceGetDistrictEventsKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetDistrictEventsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getDistrictEventsKeys({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetTeamEventMatches = <
  TData = Common.MatchServiceGetTeamEventMatchesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetTeamEventMatchesKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getTeamEventMatches({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useMatchServiceGetTeamEventMatchesSimple = <
  TData = Common.MatchServiceGetTeamEventMatchesSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetTeamEventMatchesSimpleKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getTeamEventMatchesSimple({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useMatchServiceGetTeamEventMatchesKeys = <
  TData = Common.MatchServiceGetTeamEventMatchesKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetTeamEventMatchesKeysKeyFn(
      { eventKey, ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getTeamEventMatchesKeys({
        eventKey,
        ifNoneMatch,
        teamKey,
      }) as TData,
    ...options,
  });
export const useMatchServiceGetTeamMatchesByYear = <
  TData = Common.MatchServiceGetTeamMatchesByYearDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetTeamMatchesByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getTeamMatchesByYear({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useMatchServiceGetTeamMatchesByYearSimple = <
  TData = Common.MatchServiceGetTeamMatchesByYearSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetTeamMatchesByYearSimpleKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getTeamMatchesByYearSimple({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useMatchServiceGetTeamMatchesByYearKeys = <
  TData = Common.MatchServiceGetTeamMatchesByYearKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetTeamMatchesByYearKeysKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getTeamMatchesByYearKeys({
        ifNoneMatch,
        teamKey,
        year,
      }) as TData,
    ...options,
  });
export const useMatchServiceGetEventMatches = <
  TData = Common.MatchServiceGetEventMatchesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetEventMatchesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getEventMatches({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetEventMatchesSimple = <
  TData = Common.MatchServiceGetEventMatchesSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetEventMatchesSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getEventMatchesSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetEventMatchesKeys = <
  TData = Common.MatchServiceGetEventMatchesKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetEventMatchesKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getEventMatchesKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetEventMatchTimeseries = <
  TData = Common.MatchServiceGetEventMatchTimeseriesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetEventMatchTimeseriesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getEventMatchTimeseries({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetMatch = <
  TData = Common.MatchServiceGetMatchDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetMatchKeyFn(
      { ifNoneMatch, matchKey },
      queryKey,
    ),
    queryFn: () => MatchService.getMatch({ ifNoneMatch, matchKey }) as TData,
    ...options,
  });
export const useMatchServiceGetMatchSimple = <
  TData = Common.MatchServiceGetMatchSimpleDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetMatchSimpleKeyFn(
      { ifNoneMatch, matchKey },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getMatchSimple({ ifNoneMatch, matchKey }) as TData,
    ...options,
  });
export const useMatchServiceGetMatchTimeseries = <
  TData = Common.MatchServiceGetMatchTimeseriesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetMatchTimeseriesKeyFn(
      { ifNoneMatch, matchKey },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getMatchTimeseries({ ifNoneMatch, matchKey }) as TData,
    ...options,
  });
export const useMatchServiceGetMatchZebra = <
  TData = Common.MatchServiceGetMatchZebraDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetMatchZebraKeyFn(
      { ifNoneMatch, matchKey },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getMatchZebra({ ifNoneMatch, matchKey }) as TData,
    ...options,
  });
