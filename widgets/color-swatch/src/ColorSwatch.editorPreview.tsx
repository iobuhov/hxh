import { ReactElement, createElement } from "react";
import { ColorSwatchPreviewProps } from "../typings/ColorSwatchProps";

export function preview({ text }: ColorSwatchPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
