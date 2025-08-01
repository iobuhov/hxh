import { ReactElement, createElement } from "react";
import { DrawerPreviewProps } from "../typings/DrawerProps";

export function preview({ text }: DrawerPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
