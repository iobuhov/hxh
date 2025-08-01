import { ReactElement, createElement } from "react";
import { NumberInputPreviewProps } from "../typings/NumberInputProps";

export function preview({ text }: NumberInputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
