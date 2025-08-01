import { ReactElement, createElement } from "react";
import { PaginationPreviewProps } from "../typings/PaginationProps";

export function preview({ text }: PaginationPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
