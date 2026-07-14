import { ReactElement, createElement } from "react";
import { BubbleChartPreviewProps } from "../typings/BubbleChartProps";

export function preview({ text }: BubbleChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
