import { ReactElement, CSSProperties, createElement } from "react";
import { NavSeparatorPreviewProps } from "../typings/NavSeparatorProps";

// Plain-DOM approximation of Mantine's Divider (Mantine can't render in Studio Pro's
// React 18 preview runtime).

const SIZE_PX: Record<string, number> = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 };

export function preview(props: NavSeparatorPreviewProps): ReactElement {
    const thickness = SIZE_PX[props.size] ?? 1;
    const borderStyle = props.variant || "solid";
    const lineColor = "var(--mantine-color-gray-3, #dee2e6)";

    if (props.orientation === "vertical") {
        const style: CSSProperties = {
            display: "inline-block",
            alignSelf: "stretch",
            minHeight: 24,
            borderLeft: `${thickness}px ${borderStyle} ${lineColor}`
        };
        return <div className="mantine-Divider-root" style={style} />;
    }

    if (props.label) {
        return (
            <div
                className="mantine-Divider-root"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    justifyContent:
                        props.labelPosition === "left"
                            ? "flex-start"
                            : props.labelPosition === "right"
                              ? "flex-end"
                              : "center"
                }}
            >
                {props.labelPosition !== "left" && (
                    <span style={{ flex: 1, borderTop: `${thickness}px ${borderStyle} ${lineColor}` }} />
                )}
                <span style={{ fontSize: "var(--mantine-font-size-xs)", color: "var(--mantine-color-dimmed, #868e96)" }}>
                    {props.label}
                </span>
                {props.labelPosition !== "right" && (
                    <span style={{ flex: 1, borderTop: `${thickness}px ${borderStyle} ${lineColor}` }} />
                )}
            </div>
        );
    }

    return <div className="mantine-Divider-root" style={{ borderTop: `${thickness}px ${borderStyle} ${lineColor}` }} />;
}
