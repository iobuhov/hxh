import { ReactElement, createElement } from "react";
import { PillsInputPreviewProps } from "../typings/PillsInputProps";

export function preview({ text }: PillsInputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
