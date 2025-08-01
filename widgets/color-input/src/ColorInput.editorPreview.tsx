import { ReactElement, createElement } from "react";
import { ColorInputPreviewProps } from "../typings/ColorInputProps";

export function preview({ text }: ColorInputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
