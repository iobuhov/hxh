export { SlotContext, useSlot } from "../lib-finch-context/src/finch-context.main";
export type { SlotProps, SlotContextValue } from "../lib-finch-context/src/finch-context.main";

throw new Error(
    "finch-context.main.mts is a shared module and should not be imported directly. You must include LibFinchContext in your project to use Finch context."
);
