import { ReactElement, createElement } from "react";
import { Divider as MantineDivider } from "../../mantine/mantine.main.mjs";
import { NavSeparatorContainerProps } from "../typings/NavSeparatorProps";

export function NavSeparator(props: NavSeparatorContainerProps): ReactElement {
    return (
        <MantineDivider
            className={props.class}
            style={props.style}
            orientation={props.orientation}
            variant={props.variant}
            size={props.size}
            label={props.label || undefined}
            labelPosition={props.labelPosition}
            color={props.color || undefined}
        />
    );
}
