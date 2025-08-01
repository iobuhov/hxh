import { ReactElement, createElement } from "react";
import { TitlePreviewProps } from "../typings/TitleProps";

export function preview({ text }: TitlePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
