import { ReactElement, createElement } from "react";
import { RadioPreviewProps } from "../typings/RadioProps";

export function preview({ text }: RadioPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
