import { ReactElement, createElement } from "react";
import { Slider as MantineSlider } from "../../mantine/mantine.main.mjs";
import { Big } from "big.js";
import { SliderContainerProps } from "../typings/SliderProps";

export function Slider(props: SliderContainerProps): ReactElement {
    const { value } = props;

    const numericValue =
        value.status === "available" && value.value !== undefined ? value.value.toNumber() : props.min;

    const handleChange = (next: number): void => {
        if (value.readOnly) {
            return;
        }

        value.setValue(new Big(next));

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
        <MantineSlider
            className={props.class}
            style={props.style}
            value={numericValue}
            onChange={handleChange}
            onChangeEnd={handleChangeEnd}
            min={props.min}
            max={props.max}
            step={props.step}
            inverted={props.inverted}
            color={props.color || undefined}
            size={props.size}
            radius={props.radius}
            disabled={props.disabled || value.readOnly}
        />
    );
}
