import { ReactElement, createElement } from "react";
import { SelectPreviewProps } from "../typings/SelectProps";

export function preview({ text }: SelectPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
