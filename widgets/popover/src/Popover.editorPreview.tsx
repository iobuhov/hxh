import { ReactElement, createElement } from "react";
import { PopoverPreviewProps } from "../typings/PopoverProps";

export function preview({ text }: PopoverPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
