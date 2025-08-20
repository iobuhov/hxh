import { MantineProvider, createTheme } from "@mantine/core";
import { Fragment, ReactElement, createElement, useRef, useState } from "react";
import { ThemeProviderPreviewProps } from "../typings/ThemeProviderProps";

export function preview({ children }: ThemeProviderPreviewProps): ReactElement {
    const pageRef = useRef<HTMLDivElement>(null);
    const Placeholder = children.renderer;
    const [theme] = useState(() => {
        const theme = createTheme({
            fontFamily: "Open Sans, sans-serif",
            primaryColor: "cyan"
        });
        (window as any).mantineSharedTheme = theme;
        return theme;
    });
    const getRootElement = () => pageRef.current ?? undefined;

    return (
        <Fragment>
            <div className="mantine-root preview" ref={pageRef}>
                <MantineProvider theme={theme} defaultColorScheme="auto" getRootElement={getRootElement}>
                    <Placeholder caption="Content">
                        <div />
                    </Placeholder>
                </MantineProvider>
            </div>
        </Fragment>
    );
}
