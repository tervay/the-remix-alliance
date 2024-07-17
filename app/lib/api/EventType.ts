// https://raw.githubusercontent.com/the-blue-alliance/the-blue-alliance/master/consts/event_type.py
enum EventType {
  REGIONAL = 0,
  DISTRICT = 1,
  DISTRICT_CMP = 2,
  CMP_DIVISION = 3,
  CMP_FINALS = 4,
  DISTRICT_CMP_DIVISION = 5,
  FOC = 6,
  REMOTE = 7,

  OFFSEASON = 99,
  PRESEASON = 100,
  UNLABLED = -1,
}

const EVENT_TYPE_NAMES: { [key in EventType]: string } = {
  [EventType.REGIONAL]: "Regional",
  [EventType.DISTRICT]: "District",
  [EventType.DISTRICT_CMP_DIVISION]: "District Championship Division",
  [EventType.DISTRICT_CMP]: "District Championship",
  [EventType.CMP_DIVISION]: "Championship Division",
  [EventType.CMP_FINALS]: "Championship Finals",
  [EventType.FOC]: "Festival of Champions",
  [EventType.OFFSEASON]: "Offseason",
  [EventType.PRESEASON]: "Preseason",
  [EventType.REMOTE]: "Remote",
  [EventType.UNLABLED]: "--",
};

const EVENT_TYPE_SHORT_NAMES: { [key in EventType]: string } = {
  [EventType.REGIONAL]: "Regional",
  [EventType.DISTRICT]: "District",
  [EventType.DISTRICT_CMP_DIVISION]: "District Championship Division",
  [EventType.DISTRICT_CMP]: "District Championship",
  [EventType.CMP_DIVISION]: "Division",
  [EventType.CMP_FINALS]: "Championship",
  [EventType.FOC]: "FoC",
  [EventType.OFFSEASON]: "Offseason",
  [EventType.PRESEASON]: "Preseason",
  [EventType.REMOTE]: "Remote",
  [EventType.UNLABLED]: "--",
};

const DISTRICT_EVENT_TYPES: Set<EventType> = new Set([
  EventType.DISTRICT,
  EventType.DISTRICT_CMP_DIVISION,
  EventType.DISTRICT_CMP,
]);

const NON_CMP_EVENT_TYPES: Set<EventType> = new Set([
  EventType.REGIONAL,
  EventType.DISTRICT,
  EventType.DISTRICT_CMP_DIVISION,
  EventType.DISTRICT_CMP,
  EventType.REMOTE,
]);

const CMP_EVENT_TYPES: Set<EventType> = new Set([
  EventType.CMP_DIVISION,
  EventType.CMP_FINALS,
]);

const SEASON_EVENT_TYPES: Set<EventType> = new Set([
  EventType.REGIONAL,
  EventType.DISTRICT,
  EventType.DISTRICT_CMP_DIVISION,
  EventType.DISTRICT_CMP,
  EventType.CMP_DIVISION,
  EventType.CMP_FINALS,
  EventType.FOC,
  EventType.REMOTE,
]);
