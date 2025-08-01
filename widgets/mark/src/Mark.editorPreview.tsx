import { ReactElement, createElement } from "react";
import { MarkPreviewProps } from "../typings/MarkProps";

export function preview({ text }: MarkPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
