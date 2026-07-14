import { ReactElement, createElement } from "react";
import { RangeSlider as MantineRangeSlider } from "../../mantine/mantine.main.mjs";
import { Big } from "big.js";
import { RangeSliderContainerProps } from "../typings/RangeSliderProps";

export function RangeSlider(props: RangeSliderContainerProps): ReactElement {
    const { fromValue, toValue } = props;

    const from =
        fromValue.status === "available" && fromValue.value !== undefined ? fromValue.value.toNumber() : props.min;
    const to = toValue.status === "available" && toValue.value !== undefined ? toValue.value.toNumber() : props.max;

    const readOnly = fromValue.readOnly || toValue.readOnly;

    const handleChange = (next: [number, number]): void => {
        if (readOnly) {
            return;
        }

        fromValue.setValue(new Big(next[0]));
        toValue.setValue(new Big(next[1]));

        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    const handleChangeEnd = (): void => {
        if (props.onChangeEnd && props.onChangeEnd.canExecute && !props.onChangeEnd.isExecuting) {
            props.onChangeEnd.execute();
        }
    };

    return (
        <MantineRangeSlider
            className={props.class}
            style={props.style}
            value={[from, to]}
            onChange={handleChange}
            onChangeEnd={handleChangeEnd}
            min={props.min}
            max={props.max}
            step={props.step}
            minRange={props.minRange}
            color={props.color || undefined}
            size={props.size}
            radius={props.radius}
            disabled={props.disabled || readOnly}
        />
    );
}
