import { ReactElement, createElement } from "react";
import { RingProgressPreviewProps } from "../typings/RingProgressProps";

export function preview({ text }: RingProgressPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
