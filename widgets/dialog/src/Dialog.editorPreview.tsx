import { ReactElement, createElement } from "react";
import { DialogPreviewProps } from "../typings/DialogProps";

export function preview({ text }: DialogPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
