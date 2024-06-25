// https://raw.githubusercontent.com/the-blue-alliance/the-blue-alliance/master/consts/event_type.py
export const REGIONAL = 0;
export const DISTRICT = 1;
export const DISTRICT_CMP = 2;
export const CMP_DIVISION = 3;
export const CMP_FINALS = 4;
export const DISTRICT_CMP_DIVISION = 5;
export const FOC = 6;
export const REMOTE = 7;

export const OFFSEASON = 99;
export const PRESEASON = 100;
export const UNLABLED = -1;

export const eventTypeNames: { [key: number]: string } = {
  [REGIONAL]: "Regional",
  [DISTRICT]: "District",
  [DISTRICT_CMP_DIVISION]: "District Championship Division",
  [DISTRICT_CMP]: "District Championship",
  [CMP_DIVISION]: "Championship Division",
  [CMP_FINALS]: "Championship Finals",
  [FOC]: "Festival of Champions",
  [OFFSEASON]: "Offseason",
  [PRESEASON]: "Preseason",
  [REMOTE]: "Remote",
  [UNLABLED]: "--",
};

export const shortEventTypeNames: { [key: number]: string } = {
  [REGIONAL]: "Regional",
  [DISTRICT]: "District",
  [DISTRICT_CMP_DIVISION]: "District Championship Division",
  [DISTRICT_CMP]: "District Championship",
  [CMP_DIVISION]: "Division",
  [CMP_FINALS]: "Championship",
  [FOC]: "FoC",
  [OFFSEASON]: "Offseason",
  [PRESEASON]: "Preseason",
  [REMOTE]: "Remote",
  [UNLABLED]: "--",
};

export const DISTRICT_EVENT_TYPES = new Set([
  DISTRICT,
  DISTRICT_CMP_DIVISION,
  DISTRICT_CMP,
]);

export const NON_CMP_EVENT_TYPES = new Set([
  REGIONAL,
  DISTRICT,
  DISTRICT_CMP_DIVISION,
  DISTRICT_CMP,
  REMOTE,
]);

export const CMP_EVENT_TYPES = new Set([CMP_DIVISION, CMP_FINALS]);

export const SEASON_EVENT_TYPES = new Set([
  REGIONAL,
  DISTRICT,
  DISTRICT_CMP_DIVISION,
  DISTRICT_CMP,
  CMP_DIVISION,
  CMP_FINALS,
  FOC,
  REMOTE,
]);
