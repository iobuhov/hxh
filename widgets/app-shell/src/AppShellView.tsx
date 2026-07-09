import { useDisclosure } from "@mantine/hooks";
import { createElement } from "react";
import { AppShell } from "../../mantine/mantine.main.mjs";
import { AppShellContext } from "./AppShellContext";

export const Shell = ({
    children,
    header,
    navbar
}: {
    children: React.ReactNode;
    header?: React.ReactNode;
    navbar?: React.ReactNode;
}) => {
    const disclosure = useDisclosure();
    const [collapsed] = disclosure;

    return (
        <AppShellContext.Provider value={disclosure}>
            <AppShell
                layout="alt"
                header={{ height: 60 }}
                navbar={{ width: collapsed ? 69 : 260, breakpoint: "sm", collapsed: { mobile: !collapsed } }}
                padding="md"
                styles={{ navbar: { transition: "none" }, header: { transition: "none" }, main: { transition: "none" } }}
            >
                <AppShell.Header>{header}</AppShell.Header>
                <AppShell.Navbar data-collapsed={collapsed || undefined}>{navbar}</AppShell.Navbar>
                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </AppShellContext.Provider>
    );
};
