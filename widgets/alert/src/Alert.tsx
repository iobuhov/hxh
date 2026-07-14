import { ReactElement, createElement } from "react";
import { Alert as MantineAlert } from "../../mantine/mantine.main.mjs";
import { AlertContainerProps } from "../typings/AlertProps";

export function Alert(props: AlertContainerProps): ReactElement {
    const handleClose = (): void => {
        if (props.onClose && props.onClose.canExecute && !props.onClose.isExecuting) {
            props.onClose.execute();
        }
    };

    return (
        <MantineAlert
            className={props.class}
            style={props.style}
            tabIndex={props.tabIndex}
            title={props.title || undefined}
            color={props.color}
            variant={props.variant}
            radius={props.radius}
            withCloseButton={props.withCloseButton}
            onClose={handleClose}
        >
            {props.message}
        </MantineAlert>
    );
}
