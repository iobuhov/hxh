import { ChangeEvent, ReactElement, createElement } from "react";
import { NativeSelect as MantineNativeSelect } from "../../mantine/mantine.main.mjs";
import { NativeSelectContainerProps } from "../typings/NativeSelectProps";

export function NativeSelect(props: NativeSelectContainerProps): ReactElement {
    const { value, optionsSource, optionValue, optionLabel } = props;

    const items = optionsSource.status === "available" ? (optionsSource.items ?? []) : [];

    const options = items.map(item => ({
        value: optionValue.get(item).value ?? "",
        label: optionLabel.get(item).value ?? ""
    }));

    const placeholderOption = props.placeholder ? [{ value: "", label: props.placeholder, disabled: true }] : [];

    const data = [...placeholderOption, ...options];

    const selected = value.status === "available" && value.value != null ? value.value : "";

    const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        if (!value.readOnly) {
            const next = event.currentTarget.value;
            value.setValue(next || undefined);
        }
        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    return (
        <MantineNativeSelect
            className={props.class}
            style={props.style}
            data={data}
            value={selected}
            onChange={handleChange}
            label={props.label || undefined}
            description={props.description || undefined}
            withAsterisk={props.required}
            disabled={props.disabled || value.readOnly}
            error={value.validation}
            size={props.size}
            radius={props.radius}
        />
    );
}
