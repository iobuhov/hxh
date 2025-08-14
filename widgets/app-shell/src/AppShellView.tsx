import { useDisclosure } from "@mantine/hooks";
import { createElement, useState } from "react";
import { MantineProvider, Typography, createTheme } from "../../mantine/mantine.main.mjs";

export const Shell = ({
    children,
    header = <div>Hello world!</div>,
    navbar = <div>Navbar</div>
}: {
    children: React.ReactNode;
    header?: React.ReactNode;
    navbar?: React.ReactNode;
}) => {
    const [opened, toggle] = useDisclosure();
    const [theme] = useState(() => createTheme({}));

    return (
        <MantineProvider theme={theme}>
            <Typography>{children} and Hello world!</Typography>
        </MantineProvider>
    );

    // return (
    //     <AppShell
    //         header={{ height: rem(60) }}
    //         navbar={{
    //             width: { base: opened ? 320 : 90, breakpoint: 0 },
    //             collapsed: { mobile: false, desktop: true },
    //             breakpoint: "sm"
    //         }}
    //         padding="md"
    //     >
    //         <AppShellHeader>{header}</AppShellHeader>
    //         <AppShellNavbar>
    //             <Burger
    //                 variant="subtle"
    //                 pos="absolute"
    //                 top="50%"
    //                 right={0}
    //                 ml="auto"
    //                 bg="var(--mantine-color-body)"
    //                 size="md"
    //                 onClick={() => setOpened(p => !p)}
    //                 hiddenFrom="sm"
    //                 opened={opened}
    //             />

    //             <AppShellSection>{navbar}</AppShellSection>
    //         </AppShellNavbar>
    //         <AppShellMain>{children}</AppShellMain>
    //     </AppShell>
    // );
};
