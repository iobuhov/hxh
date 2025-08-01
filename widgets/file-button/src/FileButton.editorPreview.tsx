import { ReactElement, createElement } from "react";
import { FileButtonPreviewProps } from "../typings/FileButtonProps";

export function preview({ text }: FileButtonPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
