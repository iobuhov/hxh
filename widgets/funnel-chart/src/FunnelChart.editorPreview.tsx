import { ReactElement, createElement } from "react";
import { FunnelChartPreviewProps } from "../typings/FunnelChartProps";

export function preview({ text }: FunnelChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
