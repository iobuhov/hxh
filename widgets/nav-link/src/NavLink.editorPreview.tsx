import { ReactElement, createElement } from "react";
import { NavLinkPreviewProps } from "../typings/NavLinkProps";

export function preview({ label }: NavLinkPreviewProps): ReactElement {
    return <div style={{ padding: "8px 12px" }}>{label || "NavLink"}</div>;
}
