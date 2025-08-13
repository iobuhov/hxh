import { pc } from "./pc.mjs";

export const tokens = {
    err: pc.inverse(pc.redBright(" ERROR ")),
    mxp: pc.inverse(pc.greenBright(pc.bold("  MX PROJECT PATH  ")))
};
