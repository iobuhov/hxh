import { ReactElement, createElement, useSyncExternalStore } from "react";
import { NavLink as MantineNavLink } from "../../mantine/mantine.main.mjs";
import { icons } from "../../lucide/lucide.main.mjs";
import { NavLinkContainerProps } from "../typings/NavLinkProps";

function toPascalCase(str: string): string {
    return str
        .split("-")
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
}

function renderIcon(iconName: string | undefined, size: number, strokeWidth: number): ReactElement | undefined {
    if (!iconName) return undefined;
    const name = toPascalCase(iconName);
    const IconComponent = (icons as Record<string, any>)[name];
    if (!IconComponent) return undefined;
    return <IconComponent size={size} strokeWidth={strokeWidth} />;
}

function subscribeToNavigation(callback: () => void): () => void {
    (window as any).navigation.addEventListener("currententrychange", callback);
    return () => (window as any).navigation.removeEventListener("currententrychange", callback);
}

function useIsActive(href: string | undefined): boolean {
    const pathname = useSyncExternalStore(subscribeToNavigation, () => window.location.pathname);
    if (!href) return false;
    return pathname.startsWith(href);
}

export function NavLink(props: NavLinkContainerProps): ReactElement {
    const component = props.componentType === "button" ? "button" : "a";
    const isActive = useIsActive(props.href);

    return (
        <MantineNavLink
            component={component}
            label={props.label || ""}
            description={props.description || undefined}
            href={component === "a" ? props.href || undefined : undefined}
            active={isActive}
            disabled={props.disabled}
            variant={props.variant || "filled"}
            color={props.color || undefined}
            noWrap={props.noWrap}
            autoContrast={props.autoContrast}
            leftSection={renderIcon(props.icon, props.iconSize || 20, Number(props.iconStrokeWidth) || 2)}
            onClick={props.onClick ? () => props.onClick?.execute() : undefined}
            style={{ borderRadius: "var(--mantine-radius-sm)" }}
        />
    );
}
