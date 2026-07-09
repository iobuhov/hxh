import { ReactElement, createElement } from "react";
import { Group as MantineGroup } from "../../mantine/mantine.main.mjs";
import { GroupContainerProps } from "../typings/GroupProps";

export function Group(props: GroupContainerProps): ReactElement {
    return (
        <MantineGroup
            gap={props.gap || "md"}
            justify={props.justify || "flex-start"}
            className={props.class}
            style={props.style}
        >
            {props.children}
        </MantineGroup>
    );
}
