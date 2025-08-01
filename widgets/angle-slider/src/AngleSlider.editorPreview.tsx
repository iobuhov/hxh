import { ReactElement, createElement } from "react";
import { AngleSliderPreviewProps } from "../typings/AngleSliderProps";

export function preview({ text }: AngleSliderPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
