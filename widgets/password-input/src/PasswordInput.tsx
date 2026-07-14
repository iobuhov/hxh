import { ChangeEvent, ReactElement, createElement } from "react";
import { PasswordInput as MantinePasswordInput } from "../../mantine/mantine.main.mjs";
import { PasswordInputContainerProps } from "../typings/PasswordInputProps";

export function PasswordInput(props: PasswordInputContainerProps): ReactElement {
    const { value } = props;

    const text = value.status === "available" && value.value !== undefined ? value.value : "";

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (!value.readOnly) {
            value.setValue(event.currentTarget.value);
        }
    };

    const handleBlur = (): void => {
        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    return (
        <MantinePasswordInput
            className={props.class}
            style={props.style}
            tabIndex={props.tabIndex}
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
            label={props.label || undefined}
            description={props.description || undefined}
            placeholder={props.placeholder || undefined}
            withAsterisk={props.required}
            disabled={props.disabled || value.readOnly}
            error={value.validation}
            size={props.size}
            radius={props.radius}
        />
    );
}
