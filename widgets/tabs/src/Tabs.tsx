import { ReactElement, createElement } from "react";
import { Tabs as MantineTabs } from "../../mantine/mantine.main.mjs";
import { TabsContainerProps } from "../typings/TabsProps";

export function Tabs(props: TabsContainerProps): ReactElement {
    const { value } = props;
    const active = value.status === "available" && value.value ? value.value : null;

    const handleChange = (next: string | null): void => {
        if (!value.readOnly) {
            value.setValue(next ?? "");
        }
        if (props.onTabChange && props.onTabChange.canExecute && !props.onTabChange.isExecuting) {
            props.onTabChange.execute();
        }
    };

    return (
        <MantineTabs
            className={props.class}
            style={props.style}
            value={active}
            onChange={handleChange}
            keepMounted={false}
            variant={props.variant}
            orientation={props.orientation}
            color={props.color || undefined}
            radius={props.radius || undefined}
        >
            {props.content}
        </MantineTabs>
    );
}
