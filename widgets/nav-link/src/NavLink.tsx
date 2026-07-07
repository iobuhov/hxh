import { ReactElement, createElement } from "react";
import { NavLink as MantineNavLink } from "../../mantine/mantine.main.mjs";
import { NavLinkContainerProps } from "../typings/NavLinkProps";

export function NavLink(props: NavLinkContainerProps): ReactElement {
    return <MantineNavLink label={props.label || ""} active={props.active} variant="filled" />;
}
