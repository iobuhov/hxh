import { ReactElement, createElement } from "react";
import { GridPreviewProps } from "../typings/GridProps";

export function preview(props: GridPreviewProps): ReactElement {
    return (
        <div className="mantine-Grid-root">
            <props.children.renderer>
                <div style={{ display: "contents" }} />
            </props.children.renderer>
        </div>
    );
}
