import { ReactElement, createElement } from "react";
import { icons } from "../../lucide/lucide.main.mjs";
import { ThemeIcon } from "../../mantine/mantine.main.mjs";
import { LucideIconContainerProps } from "../typings/LucideIconProps";

function toPascalCase(str: string): string {
    return str
        .split("-")
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
}

export function LucideIcon(props: LucideIconContainerProps): ReactElement {
    const iconName = toPascalCase(props.icon || "circle");
    const IconComponent = (icons as Record<string, any>)[iconName];

    if (!IconComponent) {
        return <span title={`Icon "${props.icon}" not found`} />;
    }

    const icon = (
        <IconComponent
            size={props.size || 20}
            color={props.color || "currentColor"}
            strokeWidth={Number(props.strokeWidth) || 2}
        />
    );

    if (props.themeIcon) {
        return (
            <ThemeIcon
                variant={props.themeIconVariant || "light"}
                color={props.themeIconColor || "gray"}
                size={props.themeIconSize || "sm"}
            >
                {icon}
            </ThemeIcon>
        );
    }

    return icon;
}
