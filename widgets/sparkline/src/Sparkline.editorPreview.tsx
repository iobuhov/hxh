import { ReactElement, createElement } from "react";
import { SparklinePreviewProps } from "../typings/SparklineProps";

export function preview({ text }: SparklinePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
