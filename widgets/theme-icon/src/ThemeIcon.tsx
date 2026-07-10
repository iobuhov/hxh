import { ReactElement, createElement } from "react";
import { ThemeIcon as MantineThemeIcon } from "../../mantine/mantine.main.mjs";
import { ThemeIconContainerProps } from "../typings/ThemeIconProps";

export function ThemeIcon(props: ThemeIconContainerProps): ReactElement {
    return (
        <MantineThemeIcon
            className={props.class}
            style={props.style}
            variant={props.variant}
            color={props.color || undefined}
            size={props.size || undefined}
            radius={props.radius || undefined}
        >
            {props.content}
        </MantineThemeIcon>
    );
}
