import { ReactElement, createElement } from "react";
import { AnchorPreviewProps } from "../typings/AnchorProps";

export function preview({ text }: AnchorPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
