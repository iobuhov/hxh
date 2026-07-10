import { ReactElement, createElement } from "react";
import { Text as MantineText } from "../../mantine/mantine.main.mjs";
import { NavGroupLabelContainerProps } from "../typings/NavGroupLabelProps";

export function NavGroupLabel(props: NavGroupLabelContainerProps): ReactElement {
    const text = props.text?.status === "available" ? props.text.value : "";

    return (
        <MantineText
            className={props.class}
            style={props.style}
            size={props.size}
            c={props.color || "dimmed"}
            fw={props.fontWeight ? Number(props.fontWeight) || props.fontWeight : undefined}
            tt={props.uppercase ? "uppercase" : undefined}
        >
            {text}
        </MantineText>
    );
}
