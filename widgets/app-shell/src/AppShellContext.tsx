import { createContext, useContext } from "react";

type UseDisclosureReturn = [boolean, { open: () => void; close: () => void; toggle: () => void }];

const KEY = Symbol.for("finch.appshell.context");

function getOrCreateContext() {
    if (!(window as any)[KEY]) {
        (window as any)[KEY] = createContext<UseDisclosureReturn>([false, { open: () => {}, close: () => {}, toggle: () => {} }]);
    }
    return (window as any)[KEY] as React.Context<UseDisclosureReturn>;
}

export const AppShellContext = getOrCreateContext();

export function useAppShell(): UseDisclosureReturn {
    return useContext(AppShellContext);
}
