import { ReactElement, createElement } from "react";
import { GridPreviewProps, JustifyEnum } from "../typings/GridProps";

const JUSTIFY_MAP: Record<JustifyEnum, string> = {
    flexStart: "flex-start",
    center: "center",
    flexEnd: "flex-end",
    spaceBetween: "space-between",
    spaceAround: "space-around"
};

export function preview(props: GridPreviewProps): ReactElement {
    return (
        <div
            className="mantine-Grid-root"
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: props.gap || "var(--mantine-spacing-md)",
                alignItems: props.align || "stretch",
                justifyContent: JUSTIFY_MAP[props.justify] || "flex-start"
            }}
        >
            <props.children.renderer>
                <div style={{ display: "contents" }} />
            </props.children.renderer>
        </div>
    );
}
