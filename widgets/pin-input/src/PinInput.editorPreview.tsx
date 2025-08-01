import { ReactElement, createElement } from "react";
import { PinInputPreviewProps } from "../typings/PinInputProps";

export function preview({ text }: PinInputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
