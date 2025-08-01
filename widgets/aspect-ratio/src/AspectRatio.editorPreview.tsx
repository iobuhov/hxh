import { ReactElement, createElement } from "react";
import { AspectRatioPreviewProps } from "../typings/AspectRatioProps";

export function preview({ text }: AspectRatioPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
