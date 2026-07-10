import { ReactElement, createElement } from "react";
import { Group as MantineGroup } from "../../mantine/mantine.main.mjs";
import { GroupContainerProps } from "../typings/GroupProps";

export function Group(props: GroupContainerProps): ReactElement {
    const wrap = props.wrap === "wrapReverse" ? "wrap-reverse" : props.wrap;

    return (
        <MantineGroup
            gap={props.gap || "md"}
            justify={props.justify || "flex-start"}
            align={props.align || "center"}
            wrap={wrap}
            className={props.class}
            style={props.style}
        >
            {props.children}
        </MantineGroup>
    );
}
