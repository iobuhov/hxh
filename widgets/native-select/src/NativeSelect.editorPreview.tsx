import { ReactElement, createElement } from "react";
import { NativeSelectPreviewProps } from "../typings/NativeSelectProps";

export function preview({ text }: NativeSelectPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
