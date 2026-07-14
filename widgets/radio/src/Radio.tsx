import { ReactElement, createElement } from "react";
import { Radio as MantineRadio, Stack, Group } from "../../mantine/mantine.main.mjs";
import { RadioContainerProps } from "../typings/RadioProps";

export function Radio(props: RadioContainerProps): ReactElement {
    const { value, optionsSource, optionValue, optionLabel } = props;

    const items = optionsSource.status === "available" ? (optionsSource.items ?? []) : [];

    const data = items.map(item => ({
        value: optionValue.get(item).value ?? "",
        label: optionLabel.get(item).value ?? ""
    }));

    const selected = value.status === "available" && value.value != null ? value.value : "";

    const disabled = props.disabled || value.readOnly;

    const handleChange = (next: string): void => {
        if (!value.readOnly) {
            value.setValue(next || undefined);
        }
        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    const options = data.map(option => (
        <MantineRadio
            key={option.value}
            value={option.value}
            label={option.label}
            disabled={disabled}
            color={props.color}
            size={props.size}
        />
    ));

    const Layout = props.orientation === "horizontal" ? Group : Stack;

    return (
        <MantineRadio.Group
            className={props.class}
            style={props.style}
            value={selected}
            onChange={handleChange}
            label={props.label || undefined}
            description={props.description || undefined}
            withAsterisk={props.required}
            error={value.validation}
            size={props.size}
        >
            <Layout mt="xs">{options}</Layout>
        </MantineRadio.Group>
    );
}
