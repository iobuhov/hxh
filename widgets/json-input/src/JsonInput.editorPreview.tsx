import { ReactElement, createElement } from "react";
import { JsonInputPreviewProps } from "../typings/JsonInputProps";

export function preview({ text }: JsonInputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
