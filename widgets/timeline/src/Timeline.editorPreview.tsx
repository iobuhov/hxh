import { ReactElement, createElement } from "react";
import { TimelinePreviewProps } from "../typings/TimelineProps";

export function preview({ text }: TimelinePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
