import { ReactElement, createElement } from "react";
import { SimpleGridPreviewProps } from "../typings/SimpleGridProps";

export function preview({ text }: SimpleGridPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
