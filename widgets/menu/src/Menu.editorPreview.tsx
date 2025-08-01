import { ReactElement, createElement } from "react";
import { MenuPreviewProps } from "../typings/MenuProps";

export function preview({ text }: MenuPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
