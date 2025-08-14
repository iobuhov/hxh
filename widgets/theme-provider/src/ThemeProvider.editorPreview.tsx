import { MantineProvider, createTheme } from "@mantine/core";
import { ReactElement, createElement, useState } from "react";
import { ThemeProviderPreviewProps } from "../typings/ThemeProviderProps";

export function preview({ children }: ThemeProviderPreviewProps): ReactElement {
    const Placeholder = children.renderer;
    const [theme] = useState(() => {
        const theme = createTheme({
            fontFamily: "Open Sans, sans-serif",
            primaryColor: "cyan"
        });
        (window as any).mantineSharedTheme = theme;
        return theme;
    });
    return (
        <MantineProvider theme={theme}>
            <Placeholder caption="Content">
                <div />
            </Placeholder>
        </MantineProvider>
    );
}
