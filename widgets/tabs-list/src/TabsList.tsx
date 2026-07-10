import { ReactElement, createElement } from "react";
import { Tabs as MantineTabs } from "../../mantine/mantine.main.mjs";
import { TabsListContainerProps, JustifyEnum } from "../typings/TabsListProps";

const JUSTIFY: Record<JustifyEnum, string> = {
    flexStart: "flex-start",
    center: "center",
    flexEnd: "flex-end",
    spaceBetween: "space-between"
};

export function TabsList(props: TabsListContainerProps): ReactElement {
    return (
        <MantineTabs.List
            className={props.class}
            style={props.style}
            grow={props.grow}
            justify={JUSTIFY[props.justify]}
        >
            {props.tabs.map(tab => (
                <MantineTabs.Tab
                    key={tab.tabValue}
                    value={tab.tabValue}
                    leftSection={tab.iconPosition === "left" ? tab.icon : undefined}
                    rightSection={tab.iconPosition === "right" ? tab.icon : undefined}
                >
                    {tab.label}
                </MantineTabs.Tab>
            ))}
        </MantineTabs.List>
    );
}
