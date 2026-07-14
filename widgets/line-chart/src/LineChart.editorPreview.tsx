import { ReactElement, createElement } from "react";
import { LineChartPreviewProps } from "../typings/LineChartProps";

export function preview({ text }: LineChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
