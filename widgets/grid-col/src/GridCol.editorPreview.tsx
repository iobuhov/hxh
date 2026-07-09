import { ReactElement, createElement } from "react";
import { GridColPreviewProps } from "../typings/GridColProps";

export function preview(props: GridColPreviewProps): ReactElement {
    const span = props.span ?? "12";
    const gridColumn = span === "auto" ? "auto" : span === "content" ? "auto" : `span ${span}`;

    return (
        <div
            className="mantine-Grid-col"
            style={{
                gridColumn,
                gridColumnStart: props.offset ? `${(props.offset ?? 0) + 1}` : undefined,
                order: props.order || undefined
            }}
        >
            <props.children.renderer>
                <div style={{ display: "contents" }} />
            </props.children.renderer>
        </div>
    );
}
