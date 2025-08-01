import { ReactElement, createElement } from "react";
import { ColorPickerPreviewProps } from "../typings/ColorPickerProps";

export function preview({ text }: ColorPickerPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
