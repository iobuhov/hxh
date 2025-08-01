import { ReactElement, createElement } from "react";
import { InputPreviewProps } from "../typings/InputProps";

export function preview({ text }: InputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
