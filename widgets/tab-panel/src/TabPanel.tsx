import { ReactElement, createElement } from "react";
import { Tabs as MantineTabs } from "../../mantine/mantine.main.mjs";
import { TabPanelContainerProps } from "../typings/TabPanelProps";

export function TabPanel(props: TabPanelContainerProps): ReactElement {
    return (
        <MantineTabs.Panel
            className={props.class}
            style={props.style}
            value={props.tabValue}
            keepMounted={props.keepMounted}
        >
            {props.content}
        </MantineTabs.Panel>
    );
}
