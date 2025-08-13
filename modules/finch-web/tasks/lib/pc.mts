import { createColors } from "picocolors";
import { env } from "node:process";

export const pc = createColors(env.FORCE_COLOR !== "0" && !env.NO_COLOR);