import { ReactElement, createElement } from "react";
import { TooltipPreviewProps } from "../typings/TooltipProps";

export function preview({ text }: TooltipPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
