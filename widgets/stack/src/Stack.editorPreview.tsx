import { ReactElement, createElement } from "react";
import { StackPreviewProps } from "../typings/StackProps";

export function preview({ text }: StackPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
