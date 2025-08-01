import { ReactElement, createElement } from "react";
import { BreadcrumbsPreviewProps } from "../typings/BreadcrumbsProps";

export function preview({ text }: BreadcrumbsPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
