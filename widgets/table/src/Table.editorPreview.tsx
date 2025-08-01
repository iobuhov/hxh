import { ReactElement, createElement } from "react";
import { TablePreviewProps } from "../typings/TableProps";

export function preview({ text }: TablePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
