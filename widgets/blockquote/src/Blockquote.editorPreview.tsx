import { ReactElement, createElement } from "react";
import { BlockquotePreviewProps } from "../typings/BlockquoteProps";

export function preview({ text }: BlockquotePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
