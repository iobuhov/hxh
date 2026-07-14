import { ReactElement, createElement } from "react";
import { PinInput as MantinePinInput } from "../../mantine/mantine.main.mjs";
import { PinInputContainerProps } from "../typings/PinInputProps";

export function PinInput(props: PinInputContainerProps): ReactElement {
    const { value } = props;

    const text = value.status === "available" && value.value !== undefined ? value.value : "";

    const handleChange = (val: string): void => {
        if (!value.readOnly) {
            value.setValue(val);
        }
        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    const handleComplete = (): void => {
        if (props.onComplete && props.onComplete.canExecute && !props.onComplete.isExecuting) {
            props.onComplete.execute();
        }
    };

    return (
        <MantinePinInput
            className={props.class}
            style={props.style}
            value={text}
            onChange={handleChange}
            onComplete={handleComplete}
            length={props.length ?? 4}
            type={props.type === "number" ? "number" : "alphanumeric"}
            mask={props.mask}
            placeholder={props.placeholder}
            oneTimeCode={props.oneTimeCode}
            disabled={props.disabled || value.readOnly}
            size={props.size}
            radius={props.radius}
        />
    );
}
