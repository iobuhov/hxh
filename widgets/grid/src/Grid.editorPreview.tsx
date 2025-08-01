import { ReactElement, createElement } from "react";
import { GridPreviewProps } from "../typings/GridProps";

export function preview({ text }: GridPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
