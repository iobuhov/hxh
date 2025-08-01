import { ReactElement, createElement } from "react";
import { HighlightPreviewProps } from "../typings/HighlightProps";

export function preview({ text }: HighlightPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
