import { ReactElement, createElement } from "react";
import { ProgressPreviewProps } from "../typings/ProgressProps";

export function preview({ text }: ProgressPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
