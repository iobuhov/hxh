import { ReactElement, createElement } from "react";
import { FileInputPreviewProps } from "../typings/FileInputProps";

export function preview({ text }: FileInputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
