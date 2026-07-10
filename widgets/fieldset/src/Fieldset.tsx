import { ReactElement, createElement } from "react";
import { Fieldset as MantineFieldset } from "../../mantine/mantine.main.mjs";
import { FieldsetContainerProps } from "../typings/FieldsetProps";

export function Fieldset(props: FieldsetContainerProps): ReactElement {
    return (
        <MantineFieldset
            className={props.class}
            style={props.style}
            legend={props.legend || undefined}
            variant={props.variant}
            radius={props.radius}
            disabled={props.disabled}
        >
            {props.content}
        </MantineFieldset>
    );
}
