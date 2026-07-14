import { ReactElement, createElement } from "react";
import { ScatterChartPreviewProps } from "../typings/ScatterChartProps";

export function preview({ text }: ScatterChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
