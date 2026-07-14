import { ReactElement, createElement } from "react";
import { HeatmapPreviewProps } from "../typings/HeatmapProps";

export function preview({ text }: HeatmapPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
