import { Breadcrumbs, MantineProvider } from "@mantine/core";
import { ReactElement, createElement } from "react";
import { BreadcrumbsPreviewProps } from "../typings/BreadcrumbsProps";

export function preview({ separator }: BreadcrumbsPreviewProps): ReactElement {
    const theme = (window.parent as any).mantineSharedTheme;
    return (
        <MantineProvider theme={theme}>
            <Breadcrumbs separator={separator || "/"}>
                <span>Home</span>
                <span>Page</span>
                <span>Current</span>
            </Breadcrumbs>
        </MantineProvider>
    );
}
