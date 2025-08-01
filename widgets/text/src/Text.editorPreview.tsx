import { ReactElement, createElement } from "react";
import { TextPreviewProps } from "../typings/TextProps";

export function preview({ text }: TextPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
