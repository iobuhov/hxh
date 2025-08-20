import { useDisclosure } from "@mantine/hooks";
import { createElement } from "react";
import { AppShell } from "../../mantine/mantine.main.mjs";

export const Shell = ({
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
