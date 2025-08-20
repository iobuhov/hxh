import { ReactElement, createElement } from "react";
import { AppShellContainerProps } from "../typings/AppShellProps";
import { Shell } from "./AppShellView";

export function AppShell(props: AppShellContainerProps): ReactElement {
    return (
        <Shell header={props.header} navbar={props.navbar}>
            {props.children}
        </Shell>
    );
}
