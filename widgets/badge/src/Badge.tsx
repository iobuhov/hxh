import { ReactElement, createElement } from "react";
import { Badge as MantineBadge } from "../../mantine/mantine.main.mjs";
import { BadgeContainerProps } from "../typings/BadgeProps";

export function Badge(props: BadgeContainerProps): ReactElement {
    const text = props.content?.status === "available" ? props.content.value : "";

    return (
        <MantineBadge
            className={props.class}
            style={props.style}
            variant={props.variant}
            color={props.color || undefined}
            size={props.size}
            radius={props.radius}
            fullWidth={props.fullWidth}
            circle={props.circle}
        >
            {text}
        </MantineBadge>
    );
}
