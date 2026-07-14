import { ReactElement, createElement } from "react";
import { DonutChartPreviewProps } from "../typings/DonutChartProps";

export function preview({ text }: DonutChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
