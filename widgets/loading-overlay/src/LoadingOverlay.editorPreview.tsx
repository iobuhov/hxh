import { ReactElement, createElement } from "react";
import { LoadingOverlayPreviewProps } from "../typings/LoadingOverlayProps";

export function preview({ text }: LoadingOverlayPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
