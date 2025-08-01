import { ReactElement, createElement } from "react";
import { AlertPreviewProps } from "../typings/AlertProps";

export function preview({ text }: AlertPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
