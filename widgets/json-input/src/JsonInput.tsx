import { ReactElement, createElement } from "react";
import { JsonInput as MantineJsonInput } from "../../mantine/mantine.main.mjs";
import { JsonInputContainerProps } from "../typings/JsonInputProps";

export function JsonInput(props: JsonInputContainerProps): ReactElement {
    const { value } = props;

    const text = value.status === "available" && value.value !== undefined ? value.value : "";

    const handleChange = (val: string): void => {
        if (!value.readOnly) {
            value.setValue(val);
        }
    };

    const handleBlur = (): void => {
        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    return (
        <MantineJsonInput
            className={props.class}
            style={props.style}
            tabIndex={props.tabIndex}
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
            label={props.label || undefined}
            description={props.description || undefined}
            placeholder={props.placeholder || undefined}
            formatOnBlur={props.formatOnBlur}
            autosize={props.autosize}
            minRows={props.minRows ?? undefined}
            maxRows={props.maxRows ?? undefined}
            validationError={props.validationError || undefined}
            withAsterisk={props.required}
            disabled={props.disabled || value.readOnly}
            error={value.validation}
            size={props.size}
            radius={props.radius}
        />
    );
}
