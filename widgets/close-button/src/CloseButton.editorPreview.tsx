import { ReactElement, createElement } from "react";
import { CloseButtonPreviewProps } from "../typings/CloseButtonProps";

export function preview({ text }: CloseButtonPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
