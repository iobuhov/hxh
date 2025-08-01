import { ReactElement, createElement } from "react";
import { KbdPreviewProps } from "../typings/KbdProps";

export function preview({ text }: KbdPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
