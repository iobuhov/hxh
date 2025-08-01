import { ReactElement, createElement } from "react";
import { HoverCardPreviewProps } from "../typings/HoverCardProps";

export function preview({ text }: HoverCardPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
