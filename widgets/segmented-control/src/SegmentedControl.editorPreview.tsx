import { ReactElement, createElement } from "react";
import { SegmentedControlPreviewProps } from "../typings/SegmentedControlProps";

export function preview({ text }: SegmentedControlPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
