import { NavLinkPreviewProps } from "../typings/NavLinkProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: NavLinkPreviewProps, schema: Properties): Properties {
    return schema;
}

export function getCustomCaption(values: NavLinkPreviewProps): string {
    return values.label || "NavLink";
}
