import { ReactElement, createElement } from "react";
import { OverlayPreviewProps } from "../typings/OverlayProps";

export function preview({ text }: OverlayPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
