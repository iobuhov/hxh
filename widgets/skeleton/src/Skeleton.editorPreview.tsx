import { ReactElement, createElement } from "react";
import { SkeletonPreviewProps } from "../typings/SkeletonProps";

export function preview({ text }: SkeletonPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
