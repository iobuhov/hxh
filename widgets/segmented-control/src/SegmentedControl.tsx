import { ReactElement, createElement } from "react";
import { SegmentedControl as MantineSegmentedControl } from "../../mantine/mantine.main.mjs";
import { SegmentedControlContainerProps } from "../typings/SegmentedControlProps";

interface SegmentData {
    value: string;
    label: string;
    disabled?: boolean;
}

function buildData(props: SegmentedControlContainerProps): SegmentData[] {
    if (props.dataSourceType === "datasource") {
        const { optionsSource, optionValue, optionLabel } = props;
        if (!optionsSource || optionsSource.status !== "available" || !optionValue || !optionLabel) {
            return [];
        }
        return (optionsSource.items ?? []).map(item => ({
            value: optionValue.get(item).value ?? "",
            label: optionLabel.get(item).value ?? ""
        }));
    }

    return (props.staticItems ?? []).map(item => ({
        value: item.itemValue,
        label: item.itemLabel,
        disabled: item.itemDisabled
    }));
}

export function SegmentedControl(props: SegmentedControlContainerProps): ReactElement | null {
    const { value, onChange } = props;

    const data = buildData(props);
    const selected = value.status === "available" && value.value != null ? value.value : "";

    const handleChange = (next: string): void => {
        if (value.readOnly || props.readOnly) {
            return;
        }
        value.setValue(next);
        if (onChange && onChange.canExecute && !onChange.isExecuting) {
            onChange.execute();
        }
    };

    // Mantine's SegmentedControl renders nothing when data is empty; render an empty
    // placeholder so the widget still occupies space in the page during configuration.
    if (data.length === 0) {
        return <div className={props.class} style={props.style} />;
    }

    const duration = props.transitionDuration ? Number(props.transitionDuration) : 200;

    return (
        <MantineSegmentedControl
            className={props.class}
            style={props.style}
            data={data}
            value={selected}
            onChange={handleChange}
            orientation={props.orientation}
            fullWidth={props.fullWidth}
            withItemsBorders={props.withItemsBorders}
            color={props.color || undefined}
            size={props.size}
            radius={props.radius}
            transitionDuration={duration}
            readOnly={props.readOnly}
            disabled={props.disabled || value.readOnly}
        />
    );
}
