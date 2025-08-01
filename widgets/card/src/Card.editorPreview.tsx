import { ReactElement, createElement } from "react";
import { CardPreviewProps } from "../typings/CardProps";

export function preview({ text }: CardPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
