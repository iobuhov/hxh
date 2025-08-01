import { ReactElement, createElement } from "react";
import { ContainerPreviewProps } from "../typings/ContainerProps";

export function preview({ text }: ContainerPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
