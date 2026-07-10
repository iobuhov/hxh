import { ReactElement, createElement } from "react";
import { icons } from "lucide-react";
import { NavLinkPreviewProps } from "../typings/NavLinkProps";

const OFFSET: Record<string, number> = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

function toPascalCase(str: string): string {
    return str
        .split("-")
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
}

export function preview(props: NavLinkPreviewProps): ReactElement {
    const iconName = props.icon ? toPascalCase(props.icon) : null;
    const IconComponent = iconName ? (icons as Record<string, any>)[iconName] : null;
    const Children = props.children.renderer;
    const offset = OFFSET[props.childrenOffset] ?? (Number(props.childrenOffset) || 24);

    return (
        <div>
            <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
                {IconComponent && (
                    <IconComponent size={props.iconSize || 20} strokeWidth={Number(props.iconStrokeWidth) || 2} />
                )}
                <div>
                    <div>{props.label || "NavLink"}</div>
                    {props.description && <div style={{ fontSize: "12px", opacity: 0.7 }}>{props.description}</div>}
                </div>
            </div>
            <div style={{ paddingLeft: offset }}>
                <Children caption="Nested links">
                    <div style={{ display: "contents" }} />
                </Children>
            </div>
        </div>
    );
}
