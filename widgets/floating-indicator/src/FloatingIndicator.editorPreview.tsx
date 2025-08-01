import { ReactElement, createElement } from "react";
import { FloatingIndicatorPreviewProps } from "../typings/FloatingIndicatorProps";

export function preview({ text }: FloatingIndicatorPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
