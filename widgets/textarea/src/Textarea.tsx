import { ChangeEvent, CSSProperties, ReactElement, createElement } from "react";
import { Textarea as MantineTextarea } from "../../mantine/mantine.main.mjs";
import { TextareaContainerProps } from "../typings/TextareaProps";

export function Textarea(props: TextareaContainerProps): ReactElement {
    const { value } = props;

    const text = value.status === "available" && value.value !== undefined ? value.value : "";

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
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
        <MantineTextarea
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
            autosize={props.autosize}
            minRows={props.minRows}
            maxRows={props.autosize ? props.maxRows : undefined}
            resize={props.resize as CSSProperties["resize"]}
            size={props.size}
            radius={props.radius}
        />
    );
}
