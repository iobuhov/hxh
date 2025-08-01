import { ReactElement, createElement } from "react";
import { CenterPreviewProps } from "../typings/CenterProps";

export function preview({ text }: CenterPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
