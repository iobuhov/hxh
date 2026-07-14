import { ReactElement, createElement } from "react";
import { RadarChartPreviewProps } from "../typings/RadarChartProps";

export function preview({ text }: RadarChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
