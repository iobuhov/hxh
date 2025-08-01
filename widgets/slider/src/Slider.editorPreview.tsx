import { ReactElement, createElement } from "react";
import { SliderPreviewProps } from "../typings/SliderProps";

export function preview({ text }: SliderPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
