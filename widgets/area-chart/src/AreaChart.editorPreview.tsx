import { ReactElement, createElement } from "react";
import { AreaChartPreviewProps } from "../typings/AreaChartProps";

export function preview({ text }: AreaChartPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
