import { ReactElement, createElement } from "react";
import { Text as MantineText } from "../../mantine/mantine.main.mjs";
import { useSlot } from "../../finch-context/finch-context.main.mjs";
import { TextContainerProps } from "../typings/TextProps";

export function Text(props: TextContainerProps): ReactElement {
    const slotProps = useSlot(props.slot === "none" ? "" : props.slot);
    const text = props.text?.status === "available" ? props.text.value : "";

    return (
        <MantineText
            id={slotProps.id || undefined}
            className={props.class}
            style={props.style}
            size={props.size || "md"}
            c={props.color || undefined}
            fw={props.fw ? Number(props.fw) : undefined}
            truncate={props.truncate === "none" ? undefined : props.truncate}
        >
            {text}
        </MantineText>
    );
}
