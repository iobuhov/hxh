import { ReactElement, createElement, createContext, useContext } from "react";
import { ActionIcon } from "../../mantine/mantine.main.mjs";
import { icons } from "../../lucide/lucide.main.mjs";
import { NavToggleContainerProps } from "../typings/NavToggleProps";

const KEY = Symbol.for("finch.appshell.context");

function getOrCreateContext() {
    if (!(window as any)[KEY]) {
        (window as any)[KEY] = createContext([false, { open: () => {}, close: () => {}, toggle: () => {} }]);
    }
    return (window as any)[KEY];
}

const AppShellContext = getOrCreateContext();

export function NavToggle(props: NavToggleContainerProps): ReactElement {
    const [collapsed, { toggle }] = useContext(AppShellContext) ?? [false, {}];
    const Icon = collapsed ? (icons as any).PanelLeft : (icons as any).PanelLeftClose;

    return (
        <ActionIcon
            className="finch-NavToggle-root"
            variant="subtle"
            onClick={toggle}
            size={props.size || "md"}
        >
            <Icon size={18} strokeWidth={2} />
        </ActionIcon>
    );
}
