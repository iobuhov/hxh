import { MantineProvider, createTheme } from "@mantine/core";
import { ReactElement, createElement, useState } from "react";
import { ThemeProviderContainerProps } from "../typings/ThemeProviderProps";

export function ThemeProvider(props: ThemeProviderContainerProps): ReactElement {
    const [theme] = useState(() =>
        createTheme({
            fontFamily: "Open Sans, sans-serif",
            primaryColor: "cyan"
        })
    );
    return <MantineProvider theme={theme}>{props.children}</MantineProvider>;
}
