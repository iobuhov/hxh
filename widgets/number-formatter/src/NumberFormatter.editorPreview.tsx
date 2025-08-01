import { ReactElement, createElement } from "react";
import { NumberFormatterPreviewProps } from "../typings/NumberFormatterProps";

export function preview({ text }: NumberFormatterPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
