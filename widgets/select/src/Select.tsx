import { ReactElement, createElement } from "react";
import { Select as MantineSelect } from "../../mantine/mantine.main.mjs";
import { SelectContainerProps } from "../typings/SelectProps";

export function Select(props: SelectContainerProps): ReactElement {
    const { value, optionsSource, optionValue, optionLabel } = props;

    const items = optionsSource.status === "available" ? (optionsSource.items ?? []) : [];

    const data = items.map(item => ({
        value: optionValue.get(item).value ?? "",
        label: optionLabel.get(item).value ?? ""
    }));

    const selected = value.status === "available" && value.value != null ? value.value : null;

    const handleChange = (next: string | null): void => {
        if (!value.readOnly) {
            value.setValue(next ?? undefined);
        }
        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    return (
        <MantineSelect
            className={props.class}
            style={props.style}
            data={data}
            value={selected}
            onChange={handleChange}
            label={props.label || undefined}
            description={props.description || undefined}
            placeholder={props.placeholder || undefined}
            withAsterisk={props.required}
            disabled={props.disabled || value.readOnly}
            error={value.validation}
            searchable={props.searchable}
            clearable={props.clearable}
            size={props.size}
            radius={props.radius}
        />
    );
}
