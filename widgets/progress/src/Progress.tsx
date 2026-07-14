import { ReactElement, createElement } from "react";
import { Progress as MantineProgress } from "../../mantine/mantine.main.mjs";
import { ProgressContainerProps } from "../typings/ProgressProps";

export function Progress(props: ProgressContainerProps): ReactElement {
    const { value } = props;

    const numericValue = value.status === "available" && value.value !== undefined ? value.value.toNumber() : 0;

    return (
        <MantineProgress
            className={props.class}
            style={props.style}
            value={numericValue}
            striped={props.striped || props.animated}
            animated={props.animated}
            color={props.color || undefined}
            size={props.size}
            radius={props.radius}
        />
    );
}
