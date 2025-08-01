import { ReactElement, createElement } from "react";
import { ImagePreviewProps } from "../typings/ImageProps";

export function preview({ text }: ImagePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
