import { ReactElement, createElement } from "react";
import { ButtonPreviewProps } from "../typings/ButtonProps";

export function preview({ text }: ButtonPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
