import { adze, createShed } from "adze";

const shed = createShed();
shed.addListener("*", () => {});
export const log = adze({}).seal();
