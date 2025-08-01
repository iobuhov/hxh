import { ReactElement, createElement } from "react";
import { NavLinkPreviewProps } from "../typings/NavLinkProps";

export function preview({ text }: NavLinkPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
