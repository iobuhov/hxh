import { ReactElement, createElement } from "react";
import { icons } from "lucide-react";
import { LucideIconPreviewProps } from "../typings/LucideIconProps";

function toPascalCase(str: string): string {
    return str
        .split("-")
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
}

export function preview({ icon, size, color, strokeWidth }: LucideIconPreviewProps): ReactElement {
    const iconName = toPascalCase(icon || "circle");
    const IconComponent = (icons as Record<string, any>)[iconName];

    if (!IconComponent) {
        return <span title={`Icon "${icon}" not found`}>?</span>;
    }

    return (
        <IconComponent
            size={size || 20}
            color={color || "currentColor"}
            strokeWidth={Number(strokeWidth) || 2}
        />
    );
}
