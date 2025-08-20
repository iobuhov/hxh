import { Fragment, ReactElement, createElement, useState } from "react";
import { ColorSchemeScript, MantineProvider, createTheme } from "../../mantine/mantine.main.mjs";
import { ThemeProviderContainerProps } from "../typings/ThemeProviderProps";

export function ThemeProvider(props: ThemeProviderContainerProps): ReactElement {
    const [theme] = useState(() => {
        const theme = createTheme({
            fontFamily: "Open Sans, sans-serif",
            primaryColor: "cyan"
        });
        return theme;
    });
    return (
        <Fragment>
            <ColorSchemeScript defaultColorScheme="auto" />
            <MantineProvider theme={theme} defaultColorScheme="auto">
                {props.children}
            </MantineProvider>
        </Fragment>
    );
}
