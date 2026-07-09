import { ReactElement, createElement } from "react";
import { GridPreviewProps } from "../typings/GridProps";

export function preview(props: GridPreviewProps): ReactElement {
    return (
        <div
            className="mantine-Grid-root"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${props.columns ?? 12}, 1fr)`,
                gap: props.gap || "var(--mantine-spacing-md)",
                alignItems: props.align || "stretch",
                justifyContent: props.justify || "flex-start"
            }}
        >
            <props.children.renderer>
                <div style={{ display: "contents" }} />
            </props.children.renderer>
        </div>
    );
}
