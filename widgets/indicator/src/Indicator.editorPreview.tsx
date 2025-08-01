import { ReactElement, createElement } from "react";
import { IndicatorPreviewProps } from "../typings/IndicatorProps";

export function preview({ text }: IndicatorPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
