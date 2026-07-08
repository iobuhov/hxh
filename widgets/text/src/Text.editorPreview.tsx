import { ReactElement, createElement } from "react";
import { TextPreviewProps } from "../typings/TextProps";

export function preview({ text }: TextPreviewProps): ReactElement {
    return <span>{text || "Text"}</span>;
}
