// generated with @7nohe/openapi-react-query-codegen@1.4.1

import { type UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  DistrictService,
  EventService,
  ListService,
  MatchService,
  TbaService,
  TeamService,
} from "../requests/services.gen";
import * as Common from "./common";
export const useTbaServiceGetStatusSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTbaServiceGetStatusKeyFn({ ifNoneMatch }, queryKey),
    queryFn: () => TbaService.getStatus({ ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () => TeamService.getTeams({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsSimpleKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamsSimple({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsKeysKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamsKeys({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsByYearKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamsByYear({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsByYearSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsByYearSimpleKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamsByYearSimple({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamsByYearKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamsByYearKeysKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamsByYearKeys({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeam({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamSimpleKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamSimple({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamYearsParticipatedSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamYearsParticipatedKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamYearsParticipated({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamDistrictsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamDistrictsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamDistricts({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamRobotsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamRobotsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamRobots({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamEvents({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsSimpleKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventsSimple({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsKeysKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventsKeys({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamEventsByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamEventsByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamEventsByYearSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamEventsByYearKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamEventsStatusesByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamEventMatchesSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamEventMatchesSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamEventMatchesKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamEventAwardsSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamEventStatusSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamAwardsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamAwardsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () => TeamService.getTeamAwards({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamAwardsByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamAwardsByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamAwardsByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamMatchesByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamMatchesByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamMatchesByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamMatchesByYearSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamMatchesByYearKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamMediaByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamMediaByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamMediaByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useTeamServiceGetTeamMediaByTagSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamMediaByTagYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTeamServiceGetTeamSocialMediaSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetTeamSocialMediaKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getTeamSocialMedia({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useTeamServiceGetEventTeamsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetEventTeamsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getEventTeams({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetEventTeamsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetEventTeamsSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getEventTeamsSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetEventTeamsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetEventTeamsKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getEventTeamsKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetEventTeamsStatusesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetEventTeamsStatusesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getEventTeamsStatuses({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetDistrictTeamsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetDistrictTeamsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getDistrictTeams({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetDistrictTeamsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetDistrictTeamsSimpleKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getDistrictTeamsSimple({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetDistrictTeamsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetDistrictTeamsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getDistrictTeamsKeys({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useTeamServiceGetDistrictRankingsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTeamServiceGetDistrictRankingsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      TeamService.getDistrictRankings({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetTeamsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () => ListService.getTeams({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useListServiceGetTeamsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsSimpleKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () =>
      ListService.getTeamsSimple({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useListServiceGetTeamsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsKeysKeyFn(
      { ifNoneMatch, pageNum },
      queryKey,
    ),
    queryFn: () => ListService.getTeamsKeys({ ifNoneMatch, pageNum }) as TData,
    ...options,
  });
export const useListServiceGetTeamsByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsByYearKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getTeamsByYear({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useListServiceGetTeamsByYearSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsByYearSimpleKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getTeamsByYearSimple({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useListServiceGetTeamsByYearKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetTeamsByYearKeysKeyFn(
      { ifNoneMatch, pageNum, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getTeamsByYearKeys({ ifNoneMatch, pageNum, year }) as TData,
    ...options,
  });
export const useListServiceGetTeamEventsStatusesByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useListServiceGetEventsByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventsByYearKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () => ListService.getEventsByYear({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useListServiceGetEventsByYearSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventsByYearSimpleKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventsByYearSimple({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useListServiceGetEventsByYearKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventsByYearKeysKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventsByYearKeys({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useListServiceGetEventTeamsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventTeamsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventTeams({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetEventTeamsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventTeamsSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventTeamsSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetEventTeamsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventTeamsKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventTeamsKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetEventTeamsStatusesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetEventTeamsStatusesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getEventTeamsStatuses({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictEventsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictEventsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictEvents({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictEventsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useListServiceGetDistrictEventsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictEventsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictEventsKeys({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictTeamsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictTeamsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictTeams({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictTeamsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictTeamsSimpleKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictTeamsSimple({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictTeamsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictTeamsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictTeamsKeys({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useListServiceGetDistrictRankingsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseListServiceGetDistrictRankingsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      ListService.getDistrictRankings({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useDistrictServiceGetTeamDistrictsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetTeamDistrictsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getTeamDistricts({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useDistrictServiceGetEventDistrictPointsSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useDistrictServiceGetDistrictsByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictsByYearKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictsByYear({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictEventsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictEventsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictEvents({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictEventsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useDistrictServiceGetDistrictEventsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useDistrictServiceGetDistrictTeamsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseDistrictServiceGetDistrictTeamsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      DistrictService.getDistrictTeams({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useDistrictServiceGetDistrictTeamsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useDistrictServiceGetDistrictTeamsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useDistrictServiceGetDistrictRankingsSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetTeamEventsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEvents({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsSimpleKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventsSimple({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsKeysKeyFn(
      { ifNoneMatch, teamKey },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventsKeys({ ifNoneMatch, teamKey }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetTeamEventsByYearKeyFn(
      { ifNoneMatch, teamKey, year },
      queryKey,
    ),
    queryFn: () =>
      EventService.getTeamEventsByYear({ ifNoneMatch, teamKey, year }) as TData,
    ...options,
  });
export const useEventServiceGetTeamEventsByYearSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetTeamEventsByYearKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetTeamEventsStatusesByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetTeamEventMatchesSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetTeamEventMatchesSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetTeamEventMatchesKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetTeamEventAwardsSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetTeamEventStatusSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetEventsByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventsByYearKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () => EventService.getEventsByYear({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useEventServiceGetEventsByYearSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventsByYearSimpleKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventsByYearSimple({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useEventServiceGetEventsByYearKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventsByYearKeysKeyFn(
      { ifNoneMatch, year },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventsByYearKeys({ ifNoneMatch, year }) as TData,
    ...options,
  });
export const useEventServiceGetEventSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () => EventService.getEvent({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventAlliancesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventAlliancesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventAlliances({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventInsightsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventInsightsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventInsights({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventOpRsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventOpRsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventOpRs({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventCopRsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventCopRsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventCopRs({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventPredictionsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventPredictionsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventPredictions({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventRankingsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventRankingsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventRankings({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventDistrictPointsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventDistrictPointsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventDistrictPoints({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventTeamsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventTeamsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventTeams({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventTeamsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventTeamsSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventTeamsSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventTeamsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventTeamsKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventTeamsKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventTeamsStatusesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventTeamsStatusesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventTeamsStatuses({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventMatchesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventMatchesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventMatches({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventMatchesSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventMatchesSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventMatchesSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventMatchesKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventMatchesKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventMatchesKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventMatchTimeseriesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventMatchTimeseriesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventMatchTimeseries({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetEventAwardsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetEventAwardsKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getEventAwards({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetDistrictEventsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetDistrictEventsKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getDistrictEvents({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useEventServiceGetDistrictEventsSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useEventServiceGetDistrictEventsKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseEventServiceGetDistrictEventsKeysKeyFn(
      { districtKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      EventService.getDistrictEventsKeys({ districtKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetTeamEventMatchesSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useMatchServiceGetTeamEventMatchesSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useMatchServiceGetTeamEventMatchesKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useMatchServiceGetTeamMatchesByYearSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useMatchServiceGetTeamMatchesByYearSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useMatchServiceGetTeamMatchesByYearKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useMatchServiceGetEventMatchesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetEventMatchesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getEventMatches({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetEventMatchesSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetEventMatchesSimpleKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getEventMatchesSimple({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetEventMatchesKeysSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetEventMatchesKeysKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getEventMatchesKeys({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetEventMatchTimeseriesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetEventMatchTimeseriesKeyFn(
      { eventKey, ifNoneMatch },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getEventMatchTimeseries({ eventKey, ifNoneMatch }) as TData,
    ...options,
  });
export const useMatchServiceGetMatchSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetMatchKeyFn(
      { ifNoneMatch, matchKey },
      queryKey,
    ),
    queryFn: () => MatchService.getMatch({ ifNoneMatch, matchKey }) as TData,
    ...options,
  });
export const useMatchServiceGetMatchSimpleSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetMatchSimpleKeyFn(
      { ifNoneMatch, matchKey },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getMatchSimple({ ifNoneMatch, matchKey }) as TData,
    ...options,
  });
export const useMatchServiceGetMatchTimeseriesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetMatchTimeseriesKeyFn(
      { ifNoneMatch, matchKey },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getMatchTimeseries({ ifNoneMatch, matchKey }) as TData,
    ...options,
  });
export const useMatchServiceGetMatchZebraSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMatchServiceGetMatchZebraKeyFn(
      { ifNoneMatch, matchKey },
      queryKey,
    ),
    queryFn: () =>
      MatchService.getMatchZebra({ ifNoneMatch, matchKey }) as TData,
    ...options,
  });
