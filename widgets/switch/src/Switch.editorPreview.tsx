import { ReactElement, createElement } from "react";
import { SwitchPreviewProps } from "../typings/SwitchProps";

export function preview(props: SwitchPreviewProps): ReactElement {
    return <div className="mantine-Switch-root">{props.label || "Switch"}</div>;
}
