import { ReactElement, createElement } from "react";
import { icons } from "lucide-react";
import { NavLinkPreviewProps } from "../typings/NavLinkProps";

function toPascalCase(str: string): string {
    return str
        .split("-")
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
}

export function preview(props: NavLinkPreviewProps): ReactElement {
    const iconName = props.icon ? toPascalCase(props.icon) : null;
    const IconComponent = iconName ? (icons as Record<string, any>)[iconName] : null;
    const ChevronRight = icons.ChevronRight;
    const collapsible = props.mode === "collapse";
    const Children = props.children.renderer;

    return (
        <div>
            <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
                {IconComponent && (
                    <IconComponent size={props.iconSize || 20} strokeWidth={Number(props.iconStrokeWidth) || 2} />
                )}
                <div style={{ flex: 1 }}>
                    <div>{props.label || "NavLink"}</div>
                    {props.description && <div style={{ fontSize: "12px", opacity: 0.7 }}>{props.description}</div>}
                </div>
                {collapsible && (
                    <ChevronRight
                        size={16}
                        strokeWidth={Number(props.iconStrokeWidth) || 2}
                        style={{ transform: props.defaultOpened ? "rotate(90deg)" : undefined }}
                    />
                )}
            </div>
            {collapsible && (
                <div style={{ paddingLeft: 24 }}>
                    <Children caption="Children">
                        <div style={{ display: "contents" }} />
                    </Children>
                </div>
            )}
        </div>
    );
}
