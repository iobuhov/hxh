import { createContext, useContext } from "react";

export type SlotProps = { id?: string };
export type SlotContextValue = Record<string, SlotProps>;

export const SlotContext = createContext<SlotContextValue>({});

export function useSlot(name: string): SlotProps {
    const slots = useContext(SlotContext);
    return slots[name] ?? {};
}
