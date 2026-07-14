import { ReactElement, createElement } from "react";
import { RadialBarChartPreviewProps } from "../typings/RadialBarChartProps";

export function preview({ text }: RadialBarChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
