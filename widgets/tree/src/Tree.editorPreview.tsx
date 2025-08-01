import { ReactElement, createElement } from "react";
import { TreePreviewProps } from "../typings/TreeProps";

export function preview({ text }: TreePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
