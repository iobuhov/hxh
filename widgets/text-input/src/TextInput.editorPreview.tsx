import { ReactElement, createElement } from "react";
import { TextInputPreviewProps } from "../typings/TextInputProps";

export function preview({ text }: TextInputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
