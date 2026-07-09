import { ReactElement, createElement } from "react";
import { Flex as MantineFlex } from "../../mantine/mantine.main.mjs";
import { FlexContainerProps } from "../typings/FlexProps";

export function Flex(props: FlexContainerProps): ReactElement {
    return (
        <MantineFlex
            direction={props.direction || "row"}
            gap={props.gap || "md"}
            align={props.align || "stretch"}
            justify={props.justify || "flex-start"}
            wrap={props.wrap || "nowrap"}
            style={props.style}
        >
            {props.children}
        </MantineFlex>
    );
}
