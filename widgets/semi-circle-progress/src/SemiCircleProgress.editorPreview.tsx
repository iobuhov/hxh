import { ReactElement, createElement } from "react";
import { SemiCircleProgressPreviewProps } from "../typings/SemiCircleProgressProps";

export function preview({ text }: SemiCircleProgressPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
