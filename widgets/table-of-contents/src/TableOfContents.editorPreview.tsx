import { ReactElement, createElement } from "react";
import { TableOfContentsPreviewProps } from "../typings/TableOfContentsProps";

export function preview({ text }: TableOfContentsPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
