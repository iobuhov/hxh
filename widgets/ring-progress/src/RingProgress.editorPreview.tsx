import { ReactElement, createElement } from "react";
import { RingProgressPreviewProps } from "../typings/RingProgressProps";

export function preview(props: RingProgressPreviewProps): ReactElement {
    return <div className="mantine-RingProgress-root">{props.label || "Ring Progress"}</div>;
}
