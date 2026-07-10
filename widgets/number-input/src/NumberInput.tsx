import { ReactElement, createElement } from "react";
import { NumberInput as MantineNumberInput } from "../../mantine/mantine.main.mjs";
import { DynamicValue } from "mendix";
import { Big } from "big.js";
import { NumberInputContainerProps } from "../typings/NumberInputProps";

function readNumber(dv?: DynamicValue<Big>): number | undefined {
    return dv && dv.status === "available" && dv.value !== undefined ? dv.value.toNumber() : undefined;
}

export function NumberInput(props: NumberInputContainerProps): ReactElement {
    const { value } = props;

    const numericValue = value.status === "available" && value.value !== undefined ? value.value.toNumber() : "";

    const handleChange = (next: number | string): void => {
        if (value.readOnly) {
            return;
        }

        if (next === "" || next === "-") {
            value.setValue(undefined);
        } else {
            const parsed = typeof next === "number" ? next : Number(next);
            if (!Number.isFinite(parsed)) {
                // Intermediate value (e.g. "1."); let Mantine manage display, keep attribute untouched.
                return;
            }
            value.setValue(new Big(parsed));
        }

        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    return (
        <MantineNumberInput
            className={props.class}
            style={props.style}
            tabIndex={props.tabIndex}
            value={numericValue}
            onChange={handleChange}
            label={props.label || undefined}
            description={props.description || undefined}
            placeholder={props.placeholder || undefined}
            withAsterisk={props.required}
            disabled={props.disabled || value.readOnly}
            error={value.validation}
            min={readNumber(props.min)}
            max={readNumber(props.max)}
            step={props.step}
            clampBehavior={props.clampBehavior}
            allowDecimal={props.allowDecimal}
            decimalScale={readNumber(props.decimalScale)}
            fixedDecimalScale={props.fixedDecimalScale}
            allowNegative={props.allowNegative}
            thousandSeparator={props.thousandSeparator}
            prefix={props.prefix || undefined}
            suffix={props.suffix || undefined}
            hideControls={props.hideControls}
            size={props.size}
            radius={props.radius}
        />
    );
}
