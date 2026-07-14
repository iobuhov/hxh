import { ReactElement, createElement } from "react";
import { SankeyChartPreviewProps } from "../typings/SankeyChartProps";

export function preview({ text }: SankeyChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
