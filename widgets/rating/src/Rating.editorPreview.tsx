import { ReactElement, createElement } from "react";
import { RatingPreviewProps } from "../typings/RatingProps";

export function preview({ text }: RatingPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
