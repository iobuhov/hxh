import { ReactElement, createElement } from "react";
import { CompositeChartPreviewProps } from "../typings/CompositeChartProps";

export function preview({ text }: CompositeChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
