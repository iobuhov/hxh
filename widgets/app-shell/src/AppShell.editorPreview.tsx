import { AppShell, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { createElement, ReactElement } from "react";
import { AppShellPreviewProps } from "../typings/AppShellProps";

const Shell = ({
    children,
    header,
    navbar
}: {
    children: React.ReactNode;
    header?: React.ReactNode;
    navbar?: React.ReactNode;
}) => {
    const [opened] = useDisclosure();

    return (
        <AppShell
            layout="alt"
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>{header}</AppShell.Header>
            <AppShell.Navbar>{navbar}</AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
};

export function preview({ children, navbar, header }: AppShellPreviewProps): ReactElement {
    const Main = children.renderer;
    const Navbar = navbar.renderer;
    const Header = header.renderer;

    const theme = (window.parent as any).mantineSharedTheme;
    return (
        <MantineProvider theme={theme}>
            <Shell
                navbar={
                    <Navbar caption="Navbar">
                        <div />
                    </Navbar>
                }
                header={
                    <Header caption="Header">
                        <div />
                    </Header>
                }
            >
                <Main caption="Main">
                    <div style={{ display: "contents" }} />
                </Main>
            </Shell>
        </MantineProvider>
    );
}
