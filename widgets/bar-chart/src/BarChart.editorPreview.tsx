import { ReactElement, createElement } from "react";
import { BarChartPreviewProps } from "../typings/BarChartProps";

export function preview({ text }: BarChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
