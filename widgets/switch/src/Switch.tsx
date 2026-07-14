import { ChangeEvent, ReactElement, createElement } from "react";
import { Switch as MantineSwitch } from "../../mantine/mantine.main.mjs";
import { SwitchContainerProps } from "../typings/SwitchProps";

export function Switch(props: SwitchContainerProps): ReactElement {
    const { value } = props;

    const checked = value.status === "available" && value.value === true;

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (value.readOnly) {
            return;
        }

        value.setValue(event.currentTarget.checked);

        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    return (
        <MantineSwitch
            className={props.class}
            style={props.style}
            tabIndex={props.tabIndex}
            checked={checked}
            onChange={handleChange}
            label={props.label || undefined}
            description={props.description || undefined}
            onLabel={props.onLabel || undefined}
            offLabel={props.offLabel || undefined}
            labelPosition={props.labelPosition}
            color={props.color || undefined}
            size={props.size}
            radius={props.radius}
            disabled={props.disabled || value.readOnly}
            error={value.validation}
        />
    );
}
