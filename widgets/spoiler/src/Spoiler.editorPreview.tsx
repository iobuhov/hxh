import { ReactElement, createElement } from "react";
import { SpoilerPreviewProps } from "../typings/SpoilerProps";

export function preview({ text }: SpoilerPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
