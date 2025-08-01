import { ReactElement, createElement } from "react";
import { SwitchPreviewProps } from "../typings/SwitchProps";

export function preview({ text }: SwitchPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
