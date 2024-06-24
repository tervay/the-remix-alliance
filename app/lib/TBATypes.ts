export interface Event {
  address?: string;
  city: string;
  country: string;
  district?: District;
  division_keys: string[];
  end_date: string;
  event_code: string;
  event_type: number;
  event_type_string: string;
  first_event_code?: string;
  first_event_id: any;
  gmaps_place_id?: string;
  gmaps_url?: string;
  key: string;
  lat?: number;
  lng?: number;
  location_name?: string;
  name: string;
  parent_event_key?: string;
  playoff_type?: number;
  playoff_type_string?: string;
  postal_code?: string;
  short_name: string;
  start_date: string;
  state_prov: string;
  timezone: string;
  webcasts: Webcast[];
  website?: string;
  week?: number;
  year: number;
}

export interface Team {
  address: null;
  city: string;
  country: string;
  gmaps_place_id: null;
  gmaps_url: null;
  key: string;
  lat: null;
  lng: null;
  location_name: null;
  motto: null;
  name: string;
  nickname: string;
  postal_code: null | string;
  rookie_year: number;
  school_name: string;
  state_prov: string;
  team_number: number;
  website: null | string;
}

export interface District {
  abbreviation: string;
  display_name: string;
  key: string;
  year: number;
}

export interface Webcast {
  channel: string;
  type: string;
  date?: string;
}

export interface EventAlliance {
  declines: any[];
  name: string;
  picks: string[];
  status: Status;
}

export interface Status {
  current_level_record: Record;
  double_elim_round: string;
  level: string;
  playoff_type: number;
  record: Record;
  status: string;
}

export interface Record {
  losses: number;
  ties: number;
  wins: number;
}
export interface EventRankings {
  extra_stats_info: Info[];
  rankings: Ranking[];
  sort_order_info: Info[];
}

export interface Info {
  name: string;
  precision: number;
}

export interface Ranking {
  dq: number;
  extra_stats: number[];
  matches_played: number;
  qual_average: null;
  rank: number;
  record: Record;
  sort_orders: number[];
  team_key: string;
}
export interface EventMatch {
  actual_time: number;
  alliances: Alliances;
  comp_level: string;
  event_key: string;
  key: string;
  match_number: number;
  post_result_time: number;
  predicted_time: number;
  score_breakdown: ScoreBreakdown;
  set_number: number;
  time: number;
  videos: Video[];
  winning_alliance: string;
}

export interface Alliances {
  blue: AlliancesBlue;
  red: AlliancesBlue;
}

export interface AlliancesBlue {
  dq_team_keys: any[];
  score: number;
  surrogate_team_keys: any[];
  team_keys: string[];
}

export interface ScoreBreakdown {
  blue: ScoreBreakdown2024;
  red: ScoreBreakdown2024;
}

export interface ScoreBreakdown2024 {
  adjustPoints: number;
  autoAmpNoteCount: number;
  autoAmpNotePoints: number;
  autoLeavePoints: number;
  autoLineRobot1: string;
  autoLineRobot2: string;
  autoLineRobot3: string;
  autoPoints: number;
  autoSpeakerNoteCount: number;
  autoSpeakerNotePoints: number;
  autoTotalNotePoints: number;
  coopNotePlayed: boolean;
  coopertitionBonusAchieved: boolean;
  coopertitionCriteriaMet: boolean;
  endGameHarmonyPoints: number;
  endGameNoteInTrapPoints: number;
  endGameOnStagePoints: number;
  endGameParkPoints: number;
  endGameRobot1: string;
  endGameRobot2: string;
  endGameRobot3: string;
  endGameSpotLightBonusPoints: number;
  endGameTotalStagePoints: number;
  ensembleBonusAchieved: boolean;
  ensembleBonusOnStageRobotsThreshold: number;
  ensembleBonusStagePointsThreshold: number;
  foulCount: number;
  foulPoints: number;
  g206Penalty: boolean;
  g408Penalty: boolean;
  g424Penalty: boolean;
  melodyBonusAchieved: boolean;
  melodyBonusThreshold: number;
  melodyBonusThresholdCoop: number;
  melodyBonusThresholdNonCoop: number;
  micCenterStage: boolean;
  micStageLeft: boolean;
  micStageRight: boolean;
  rp: number;
  techFoulCount: number;
  teleopAmpNoteCount: number;
  teleopAmpNotePoints: number;
  teleopPoints: number;
  teleopSpeakerNoteAmplifiedCount: number;
  teleopSpeakerNoteAmplifiedPoints: number;
  teleopSpeakerNoteCount: number;
  teleopSpeakerNotePoints: number;
  teleopTotalNotePoints: number;
  totalPoints: number;
  trapCenterStage: boolean;
  trapStageLeft: boolean;
  trapStageRight: boolean;
}

export interface Video {
  key: string;
  type: string;
}
