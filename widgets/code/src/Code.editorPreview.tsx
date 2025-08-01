import { ReactElement, createElement } from "react";
import { CodePreviewProps } from "../typings/CodeProps";

export function preview({ text }: CodePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
