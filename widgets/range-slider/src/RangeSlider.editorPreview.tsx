import { ReactElement, createElement } from "react";
import { RangeSliderPreviewProps } from "../typings/RangeSliderProps";

export function preview({ text }: RangeSliderPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
