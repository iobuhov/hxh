import { ReactElement, createElement } from "react";
import { ComboboxPreviewProps } from "../typings/ComboboxProps";

export function preview({ text }: ComboboxPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
