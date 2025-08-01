import { ReactElement, createElement } from "react";
import { BackgroundImagePreviewProps } from "../typings/BackgroundImageProps";

export function preview({ text }: BackgroundImagePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
