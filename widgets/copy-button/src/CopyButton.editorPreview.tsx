import { ReactElement, createElement } from "react";
import { CopyButtonPreviewProps } from "../typings/CopyButtonProps";

export function preview({ text }: CopyButtonPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
