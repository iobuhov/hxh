import { ReactElement, createElement } from "react";
import { CheckboxPreviewProps } from "../typings/CheckboxProps";

export function preview({ text }: CheckboxPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
