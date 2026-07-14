import { ReactElement, createElement } from "react";
import { TreemapPreviewProps } from "../typings/TreemapProps";

export function preview({ text }: TreemapPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
