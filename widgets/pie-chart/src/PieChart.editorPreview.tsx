import { ReactElement, createElement } from "react";
import { PieChartPreviewProps } from "../typings/PieChartProps";

export function preview({ text }: PieChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
