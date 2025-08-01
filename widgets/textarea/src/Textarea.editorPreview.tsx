import { ReactElement, createElement } from "react";
import { TextareaPreviewProps } from "../typings/TextareaProps";

export function preview({ text }: TextareaPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
