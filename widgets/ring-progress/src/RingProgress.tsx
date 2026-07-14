import { ReactElement, createElement } from "react";
import { RingProgress as MantineRingProgress } from "../../mantine/mantine.main.mjs";
import { RingProgressContainerProps } from "../typings/RingProgressProps";

export function RingProgress(props: RingProgressContainerProps): ReactElement {
    const { value } = props;

    const numericValue = value.status === "available" && value.value !== undefined ? value.value.toNumber() : 0;

    return (
        <MantineRingProgress
            className={props.class}
            style={props.style}
            value={numericValue}
            sections={[{ value: numericValue, color: props.color }]}
            size={props.size}
            thickness={props.thickness}
            roundCaps={props.roundCaps}
            label={props.label ? props.label : undefined}
        />
    );
}
