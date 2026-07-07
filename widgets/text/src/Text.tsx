import { ReactElement, createElement } from "react";
import { Text as MantineText } from "../../mantine/mantine.main.mjs";
import { TextContainerProps } from "../typings/TextProps";

export function Text(props: TextContainerProps): ReactElement {
    return (
        <MantineText
            size={props.size || "md"}
            c={props.color || undefined}
            fw={props.fw ? Number(props.fw) : undefined}
        >
            {props.text || ""}
        </MantineText>
    );
}
