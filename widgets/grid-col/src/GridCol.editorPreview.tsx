import { ReactElement, createElement } from "react";
import { GridColPreviewProps } from "../typings/GridColProps";

export function preview(props: GridColPreviewProps): ReactElement {
    return (
        <div className="mantine-Grid-col">
            <props.children.renderer>
                <div />
            </props.children.renderer>
        </div>
    );
}
