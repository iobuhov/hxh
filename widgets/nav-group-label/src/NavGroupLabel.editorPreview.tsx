import { ReactElement, createElement } from "react";
import { NavGroupLabelPreviewProps } from "../typings/NavGroupLabelProps";

// Plain-DOM approximation of the Mantine Text used for a group label (Mantine can't
// render in Studio Pro's React 18 preview runtime).

export function preview(props: NavGroupLabelPreviewProps): ReactElement {
    return (
        <div
            className="mantine-Text-root"
            style={{
                fontSize: `var(--mantine-font-size-${props.size})`,
                fontWeight: props.fontWeight ? Number(props.fontWeight) || undefined : undefined,
                color: props.color === "dimmed" || !props.color ? "var(--mantine-color-dimmed, #868e96)" : props.color,
                textTransform: props.uppercase ? "uppercase" : undefined
            }}
        >
            {props.text || "Group label"}
        </div>
    );
}
