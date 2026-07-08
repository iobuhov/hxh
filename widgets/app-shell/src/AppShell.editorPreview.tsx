import { createElement, ReactElement, useEffect, useState } from "react";
import { AppShellPreviewProps } from "../typings/AppShellProps";

function useColorScheme(): "light" | "dark" {
    const [scheme, setScheme] = useState<"light" | "dark">(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    );

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = (e: MediaQueryListEvent) => setScheme(e.matches ? "dark" : "light");
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    return scheme;
}

export function preview({ children, navbar, header }: AppShellPreviewProps): ReactElement {
    const Main = children.renderer;
    const Navbar = navbar.renderer;
    const Header = header.renderer;
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    const bg = isDark ? "#1a1b1e" : "#fff";
    const border = isDark ? "#373a40" : "#dee2e6";
    const text = isDark ? "#c1c2c5" : "#000";

    return (
        <div style={{ display: "flex", minHeight: 400, color: text, fontFamily: "Open Sans, sans-serif" }}>
            <style>{`.finch-appshell-preview__main div[data-drop-zone] > div { min-height: unset; }`}</style>
            <div style={{ width: 260, borderRight: `1px solid ${border}`, padding: 8, background: bg }}>
                <Navbar caption="Navbar">
                    <div />
                </Navbar>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ height: 60, borderBottom: `1px solid ${border}`, padding: 8, background: bg }}>
                    <Header caption="Header">
                        <div />
                    </Header>
                </div>
                <div className="finch-appshell-preview__main" style={{ flex: 1, padding: 16, background: bg }}>
                    <Main caption="Main">
                        <div style={{ display: "contents" }} />
                    </Main>
                </div>
            </div>
        </div>
    );
}
