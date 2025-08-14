import { MantineProvider } from "@mantine/core";
import { ReactElement, createElement } from "react";
import { AppShellPreviewProps } from "../typings/AppShellProps";
import { Shell } from "./AppShellView";

export function preview({ children }: AppShellPreviewProps): ReactElement {
    const Placeholder = children.renderer;
    const theme = (window.parent as any).mantineSharedTheme;
    return (
        <MantineProvider theme={theme}>
            <Shell>
                <Placeholder caption="Main">
                    <div />
                </Placeholder>
            </Shell>
        </MantineProvider>
    );
}
