import { ReactElement, createElement } from "react";
import { GridColPreviewProps } from "../typings/GridColProps";

export function preview(props: GridColPreviewProps): ReactElement {
    const span = props.span ?? "12";
    const numSpan = Number(span);
    const flexBasis =
        span === "auto" || span === "content" || !Number.isFinite(numSpan)
            ? undefined
            : `calc(${(numSpan / 12) * 100}% - var(--mantine-spacing-md))`;
    const flexGrow = span === "auto" ? 1 : 0;

    return (
        <div
            className="mantine-Grid-col"
            style={{
                flexBasis,
                flexGrow,
                flexShrink: 0,
                order: props.order || undefined
            }}
        >
            <props.children.renderer>
                <div style={{ display: "contents" }} />
            </props.children.renderer>
        </div>
    );
}
