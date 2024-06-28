// generated with @7nohe/openapi-react-query-codegen@1.4.1

import type { QueryClient } from "@tanstack/react-query";
import {
  DistrictService,
  EventService,
  ListService,
  MatchService,
  TbaService,
  TeamService,
} from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseTbaServiceGetStatus = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
  }: {
    ifNoneMatch?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTbaServiceGetStatusKeyFn({ ifNoneMatch }),
    queryFn: () => TbaService.getStatus({ ifNoneMatch }),
  });
export const prefetchUseTeamServiceGetTeams = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamsKeyFn({ ifNoneMatch, pageNum }),
    queryFn: () => TeamService.getTeams({ ifNoneMatch, pageNum }),
  });
export const prefetchUseTeamServiceGetTeamsSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamsSimpleKeyFn({
      ifNoneMatch,
      pageNum,
    }),
    queryFn: () => TeamService.getTeamsSimple({ ifNoneMatch, pageNum }),
  });
export const prefetchUseTeamServiceGetTeamsKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamsKeysKeyFn({ ifNoneMatch, pageNum }),
    queryFn: () => TeamService.getTeamsKeys({ ifNoneMatch, pageNum }),
  });
export const prefetchUseTeamServiceGetTeamsByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamsByYearKeyFn({
      ifNoneMatch,
      pageNum,
      year,
    }),
    queryFn: () => TeamService.getTeamsByYear({ ifNoneMatch, pageNum, year }),
  });
export const prefetchUseTeamServiceGetTeamsByYearSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamsByYearSimpleKeyFn({
      ifNoneMatch,
      pageNum,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamsByYearSimple({ ifNoneMatch, pageNum, year }),
  });
export const prefetchUseTeamServiceGetTeamsByYearKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamsByYearKeysKeyFn({
      ifNoneMatch,
      pageNum,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamsByYearKeys({ ifNoneMatch, pageNum, year }),
  });
export const prefetchUseTeamServiceGetTeam = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamKeyFn({ ifNoneMatch, teamKey }),
    queryFn: () => TeamService.getTeam({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamSimpleKeyFn({ ifNoneMatch, teamKey }),
    queryFn: () => TeamService.getTeamSimple({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamYearsParticipated = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamYearsParticipatedKeyFn({
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      TeamService.getTeamYearsParticipated({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamDistricts = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamDistrictsKeyFn({
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () => TeamService.getTeamDistricts({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamRobots = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamRobotsKeyFn({ ifNoneMatch, teamKey }),
    queryFn: () => TeamService.getTeamRobots({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamEvents = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventsKeyFn({ ifNoneMatch, teamKey }),
    queryFn: () => TeamService.getTeamEvents({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamEventsSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventsSimpleKeyFn({
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () => TeamService.getTeamEventsSimple({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamEventsKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventsKeysKeyFn({
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () => TeamService.getTeamEventsKeys({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamEventsByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventsByYearKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamEventsByYear({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseTeamServiceGetTeamEventsByYearSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventsByYearSimpleKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamEventsByYearSimple({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseTeamServiceGetTeamEventsByYearKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventsByYearKeysKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamEventsByYearKeys({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseTeamServiceGetTeamEventsStatusesByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventsStatusesByYearKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamEventsStatusesByYear({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseTeamServiceGetTeamEventMatches = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventMatchesKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      TeamService.getTeamEventMatches({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamEventMatchesSimple = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventMatchesSimpleKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      TeamService.getTeamEventMatchesSimple({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamEventMatchesKeys = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventMatchesKeysKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      TeamService.getTeamEventMatchesKeys({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamEventAwards = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventAwardsKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      TeamService.getTeamEventAwards({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamEventStatus = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamEventStatusKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      TeamService.getTeamEventStatus({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamAwards = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamAwardsKeyFn({ ifNoneMatch, teamKey }),
    queryFn: () => TeamService.getTeamAwards({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamAwardsByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamAwardsByYearKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamAwardsByYear({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseTeamServiceGetTeamMatchesByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamMatchesByYearKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamMatchesByYear({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseTeamServiceGetTeamMatchesByYearSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamMatchesByYearSimpleKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamMatchesByYearSimple({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseTeamServiceGetTeamMatchesByYearKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamMatchesByYearKeysKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamMatchesByYearKeys({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseTeamServiceGetTeamMediaByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamMediaByYearKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamMediaByYear({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseTeamServiceGetTeamMediaByTag = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    mediaTag,
    teamKey,
  }: {
    ifNoneMatch?: string;
    mediaTag: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamMediaByTagKeyFn({
      ifNoneMatch,
      mediaTag,
      teamKey,
    }),
    queryFn: () =>
      TeamService.getTeamMediaByTag({ ifNoneMatch, mediaTag, teamKey }),
  });
export const prefetchUseTeamServiceGetTeamMediaByTagYear = (
  queryClient: QueryClient,
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
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamMediaByTagYearKeyFn({
      ifNoneMatch,
      mediaTag,
      teamKey,
      year,
    }),
    queryFn: () =>
      TeamService.getTeamMediaByTagYear({
        ifNoneMatch,
        mediaTag,
        teamKey,
        year,
      }),
  });
export const prefetchUseTeamServiceGetTeamSocialMedia = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetTeamSocialMediaKeyFn({
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () => TeamService.getTeamSocialMedia({ ifNoneMatch, teamKey }),
  });
export const prefetchUseTeamServiceGetEventTeams = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetEventTeamsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => TeamService.getEventTeams({ eventKey, ifNoneMatch }),
  });
export const prefetchUseTeamServiceGetEventTeamsSimple = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetEventTeamsSimpleKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => TeamService.getEventTeamsSimple({ eventKey, ifNoneMatch }),
  });
export const prefetchUseTeamServiceGetEventTeamsKeys = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetEventTeamsKeysKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => TeamService.getEventTeamsKeys({ eventKey, ifNoneMatch }),
  });
export const prefetchUseTeamServiceGetEventTeamsStatuses = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetEventTeamsStatusesKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => TeamService.getEventTeamsStatuses({ eventKey, ifNoneMatch }),
  });
export const prefetchUseTeamServiceGetDistrictTeams = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetDistrictTeamsKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () => TeamService.getDistrictTeams({ districtKey, ifNoneMatch }),
  });
export const prefetchUseTeamServiceGetDistrictTeamsSimple = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetDistrictTeamsSimpleKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      TeamService.getDistrictTeamsSimple({ districtKey, ifNoneMatch }),
  });
export const prefetchUseTeamServiceGetDistrictTeamsKeys = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetDistrictTeamsKeysKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      TeamService.getDistrictTeamsKeys({ districtKey, ifNoneMatch }),
  });
export const prefetchUseTeamServiceGetDistrictRankings = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTeamServiceGetDistrictRankingsKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      TeamService.getDistrictRankings({ districtKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetTeams = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetTeamsKeyFn({ ifNoneMatch, pageNum }),
    queryFn: () => ListService.getTeams({ ifNoneMatch, pageNum }),
  });
export const prefetchUseListServiceGetTeamsSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetTeamsSimpleKeyFn({
      ifNoneMatch,
      pageNum,
    }),
    queryFn: () => ListService.getTeamsSimple({ ifNoneMatch, pageNum }),
  });
export const prefetchUseListServiceGetTeamsKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetTeamsKeysKeyFn({ ifNoneMatch, pageNum }),
    queryFn: () => ListService.getTeamsKeys({ ifNoneMatch, pageNum }),
  });
export const prefetchUseListServiceGetTeamsByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetTeamsByYearKeyFn({
      ifNoneMatch,
      pageNum,
      year,
    }),
    queryFn: () => ListService.getTeamsByYear({ ifNoneMatch, pageNum, year }),
  });
export const prefetchUseListServiceGetTeamsByYearSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetTeamsByYearSimpleKeyFn({
      ifNoneMatch,
      pageNum,
      year,
    }),
    queryFn: () =>
      ListService.getTeamsByYearSimple({ ifNoneMatch, pageNum, year }),
  });
export const prefetchUseListServiceGetTeamsByYearKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    pageNum,
    year,
  }: {
    ifNoneMatch?: string;
    pageNum: number;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetTeamsByYearKeysKeyFn({
      ifNoneMatch,
      pageNum,
      year,
    }),
    queryFn: () =>
      ListService.getTeamsByYearKeys({ ifNoneMatch, pageNum, year }),
  });
export const prefetchUseListServiceGetTeamEventsStatusesByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetTeamEventsStatusesByYearKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      ListService.getTeamEventsStatusesByYear({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseListServiceGetEventsByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetEventsByYearKeyFn({ ifNoneMatch, year }),
    queryFn: () => ListService.getEventsByYear({ ifNoneMatch, year }),
  });
export const prefetchUseListServiceGetEventsByYearSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetEventsByYearSimpleKeyFn({
      ifNoneMatch,
      year,
    }),
    queryFn: () => ListService.getEventsByYearSimple({ ifNoneMatch, year }),
  });
export const prefetchUseListServiceGetEventsByYearKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetEventsByYearKeysKeyFn({
      ifNoneMatch,
      year,
    }),
    queryFn: () => ListService.getEventsByYearKeys({ ifNoneMatch, year }),
  });
export const prefetchUseListServiceGetEventTeams = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetEventTeamsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => ListService.getEventTeams({ eventKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetEventTeamsSimple = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetEventTeamsSimpleKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => ListService.getEventTeamsSimple({ eventKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetEventTeamsKeys = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetEventTeamsKeysKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => ListService.getEventTeamsKeys({ eventKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetEventTeamsStatuses = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetEventTeamsStatusesKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => ListService.getEventTeamsStatuses({ eventKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetDistrictEvents = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetDistrictEventsKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () => ListService.getDistrictEvents({ districtKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetDistrictEventsSimple = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetDistrictEventsSimpleKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      ListService.getDistrictEventsSimple({ districtKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetDistrictEventsKeys = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetDistrictEventsKeysKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      ListService.getDistrictEventsKeys({ districtKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetDistrictTeams = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetDistrictTeamsKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () => ListService.getDistrictTeams({ districtKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetDistrictTeamsSimple = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetDistrictTeamsSimpleKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      ListService.getDistrictTeamsSimple({ districtKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetDistrictTeamsKeys = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetDistrictTeamsKeysKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      ListService.getDistrictTeamsKeys({ districtKey, ifNoneMatch }),
  });
export const prefetchUseListServiceGetDistrictRankings = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseListServiceGetDistrictRankingsKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      ListService.getDistrictRankings({ districtKey, ifNoneMatch }),
  });
export const prefetchUseDistrictServiceGetTeamDistricts = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetTeamDistrictsKeyFn({
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () => DistrictService.getTeamDistricts({ ifNoneMatch, teamKey }),
  });
export const prefetchUseDistrictServiceGetEventDistrictPoints = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetEventDistrictPointsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      DistrictService.getEventDistrictPoints({ eventKey, ifNoneMatch }),
  });
export const prefetchUseDistrictServiceGetDistrictsByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetDistrictsByYearKeyFn({
      ifNoneMatch,
      year,
    }),
    queryFn: () => DistrictService.getDistrictsByYear({ ifNoneMatch, year }),
  });
export const prefetchUseDistrictServiceGetDistrictEvents = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetDistrictEventsKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      DistrictService.getDistrictEvents({ districtKey, ifNoneMatch }),
  });
export const prefetchUseDistrictServiceGetDistrictEventsSimple = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetDistrictEventsSimpleKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      DistrictService.getDistrictEventsSimple({ districtKey, ifNoneMatch }),
  });
export const prefetchUseDistrictServiceGetDistrictEventsKeys = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetDistrictEventsKeysKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      DistrictService.getDistrictEventsKeys({ districtKey, ifNoneMatch }),
  });
export const prefetchUseDistrictServiceGetDistrictTeams = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetDistrictTeamsKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      DistrictService.getDistrictTeams({ districtKey, ifNoneMatch }),
  });
export const prefetchUseDistrictServiceGetDistrictTeamsSimple = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetDistrictTeamsSimpleKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      DistrictService.getDistrictTeamsSimple({ districtKey, ifNoneMatch }),
  });
export const prefetchUseDistrictServiceGetDistrictTeamsKeys = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetDistrictTeamsKeysKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      DistrictService.getDistrictTeamsKeys({ districtKey, ifNoneMatch }),
  });
export const prefetchUseDistrictServiceGetDistrictRankings = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDistrictServiceGetDistrictRankingsKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      DistrictService.getDistrictRankings({ districtKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetTeamEvents = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventsKeyFn({
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () => EventService.getTeamEvents({ ifNoneMatch, teamKey }),
  });
export const prefetchUseEventServiceGetTeamEventsSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventsSimpleKeyFn({
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () => EventService.getTeamEventsSimple({ ifNoneMatch, teamKey }),
  });
export const prefetchUseEventServiceGetTeamEventsKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventsKeysKeyFn({
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () => EventService.getTeamEventsKeys({ ifNoneMatch, teamKey }),
  });
export const prefetchUseEventServiceGetTeamEventsByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventsByYearKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      EventService.getTeamEventsByYear({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseEventServiceGetTeamEventsByYearSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventsByYearSimpleKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      EventService.getTeamEventsByYearSimple({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseEventServiceGetTeamEventsByYearKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventsByYearKeysKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      EventService.getTeamEventsByYearKeys({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseEventServiceGetTeamEventsStatusesByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventsStatusesByYearKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      EventService.getTeamEventsStatusesByYear({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseEventServiceGetTeamEventMatches = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventMatchesKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      EventService.getTeamEventMatches({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseEventServiceGetTeamEventMatchesSimple = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventMatchesSimpleKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      EventService.getTeamEventMatchesSimple({
        eventKey,
        ifNoneMatch,
        teamKey,
      }),
  });
export const prefetchUseEventServiceGetTeamEventMatchesKeys = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventMatchesKeysKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      EventService.getTeamEventMatchesKeys({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseEventServiceGetTeamEventAwards = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventAwardsKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      EventService.getTeamEventAwards({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseEventServiceGetTeamEventStatus = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetTeamEventStatusKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      EventService.getTeamEventStatus({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseEventServiceGetEventsByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventsByYearKeyFn({ ifNoneMatch, year }),
    queryFn: () => EventService.getEventsByYear({ ifNoneMatch, year }),
  });
export const prefetchUseEventServiceGetEventsByYearSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventsByYearSimpleKeyFn({
      ifNoneMatch,
      year,
    }),
    queryFn: () => EventService.getEventsByYearSimple({ ifNoneMatch, year }),
  });
export const prefetchUseEventServiceGetEventsByYearKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    year,
  }: {
    ifNoneMatch?: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventsByYearKeysKeyFn({
      ifNoneMatch,
      year,
    }),
    queryFn: () => EventService.getEventsByYearKeys({ ifNoneMatch, year }),
  });
export const prefetchUseEventServiceGetEvent = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventKeyFn({ eventKey, ifNoneMatch }),
    queryFn: () => EventService.getEvent({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventSimple = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventSimpleKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventSimple({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventAlliances = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventAlliancesKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventAlliances({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventInsights = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventInsightsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventInsights({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventOpRs = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventOpRsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventOpRs({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventCopRs = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventCopRsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventCopRs({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventPredictions = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventPredictionsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventPredictions({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventRankings = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventRankingsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventRankings({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventDistrictPoints = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventDistrictPointsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      EventService.getEventDistrictPoints({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventTeams = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventTeamsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventTeams({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventTeamsSimple = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventTeamsSimpleKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventTeamsSimple({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventTeamsKeys = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventTeamsKeysKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventTeamsKeys({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventTeamsStatuses = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventTeamsStatusesKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      EventService.getEventTeamsStatuses({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventMatches = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventMatchesKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventMatches({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventMatchesSimple = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventMatchesSimpleKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      EventService.getEventMatchesSimple({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventMatchesKeys = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventMatchesKeysKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventMatchesKeys({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventMatchTimeseries = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventMatchTimeseriesKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      EventService.getEventMatchTimeseries({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetEventAwards = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetEventAwardsKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getEventAwards({ eventKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetDistrictEvents = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetDistrictEventsKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () => EventService.getDistrictEvents({ districtKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetDistrictEventsSimple = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetDistrictEventsSimpleKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      EventService.getDistrictEventsSimple({ districtKey, ifNoneMatch }),
  });
export const prefetchUseEventServiceGetDistrictEventsKeys = (
  queryClient: QueryClient,
  {
    districtKey,
    ifNoneMatch,
  }: {
    districtKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventServiceGetDistrictEventsKeysKeyFn({
      districtKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      EventService.getDistrictEventsKeys({ districtKey, ifNoneMatch }),
  });
export const prefetchUseMatchServiceGetTeamEventMatches = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetTeamEventMatchesKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      MatchService.getTeamEventMatches({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseMatchServiceGetTeamEventMatchesSimple = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetTeamEventMatchesSimpleKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      MatchService.getTeamEventMatchesSimple({
        eventKey,
        ifNoneMatch,
        teamKey,
      }),
  });
export const prefetchUseMatchServiceGetTeamEventMatchesKeys = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
    teamKey,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
    teamKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetTeamEventMatchesKeysKeyFn({
      eventKey,
      ifNoneMatch,
      teamKey,
    }),
    queryFn: () =>
      MatchService.getTeamEventMatchesKeys({ eventKey, ifNoneMatch, teamKey }),
  });
export const prefetchUseMatchServiceGetTeamMatchesByYear = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetTeamMatchesByYearKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      MatchService.getTeamMatchesByYear({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseMatchServiceGetTeamMatchesByYearSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetTeamMatchesByYearSimpleKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      MatchService.getTeamMatchesByYearSimple({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseMatchServiceGetTeamMatchesByYearKeys = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    teamKey,
    year,
  }: {
    ifNoneMatch?: string;
    teamKey: string;
    year: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetTeamMatchesByYearKeysKeyFn({
      ifNoneMatch,
      teamKey,
      year,
    }),
    queryFn: () =>
      MatchService.getTeamMatchesByYearKeys({ ifNoneMatch, teamKey, year }),
  });
export const prefetchUseMatchServiceGetEventMatches = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetEventMatchesKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => MatchService.getEventMatches({ eventKey, ifNoneMatch }),
  });
export const prefetchUseMatchServiceGetEventMatchesSimple = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetEventMatchesSimpleKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      MatchService.getEventMatchesSimple({ eventKey, ifNoneMatch }),
  });
export const prefetchUseMatchServiceGetEventMatchesKeys = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetEventMatchesKeysKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () => MatchService.getEventMatchesKeys({ eventKey, ifNoneMatch }),
  });
export const prefetchUseMatchServiceGetEventMatchTimeseries = (
  queryClient: QueryClient,
  {
    eventKey,
    ifNoneMatch,
  }: {
    eventKey: string;
    ifNoneMatch?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetEventMatchTimeseriesKeyFn({
      eventKey,
      ifNoneMatch,
    }),
    queryFn: () =>
      MatchService.getEventMatchTimeseries({ eventKey, ifNoneMatch }),
  });
export const prefetchUseMatchServiceGetMatch = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetMatchKeyFn({ ifNoneMatch, matchKey }),
    queryFn: () => MatchService.getMatch({ ifNoneMatch, matchKey }),
  });
export const prefetchUseMatchServiceGetMatchSimple = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetMatchSimpleKeyFn({
      ifNoneMatch,
      matchKey,
    }),
    queryFn: () => MatchService.getMatchSimple({ ifNoneMatch, matchKey }),
  });
export const prefetchUseMatchServiceGetMatchTimeseries = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetMatchTimeseriesKeyFn({
      ifNoneMatch,
      matchKey,
    }),
    queryFn: () => MatchService.getMatchTimeseries({ ifNoneMatch, matchKey }),
  });
export const prefetchUseMatchServiceGetMatchZebra = (
  queryClient: QueryClient,
  {
    ifNoneMatch,
    matchKey,
  }: {
    ifNoneMatch?: string;
    matchKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMatchServiceGetMatchZebraKeyFn({
      ifNoneMatch,
      matchKey,
    }),
    queryFn: () => MatchService.getMatchZebra({ ifNoneMatch, matchKey }),
  });
