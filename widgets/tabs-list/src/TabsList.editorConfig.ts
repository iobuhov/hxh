import { TabsListPreviewProps } from "../typings/TabsListProps";
import { Properties } from "../typings/editor-types";

// The nested property/group types are not exported from editor-types, so we traverse loosely.
/* eslint-disable @typescript-eslint/no-explicit-any */
function findProperty(groups: Properties, key: string): any {
    for (const group of groups as any[]) {
        const found = group.properties?.find((prop: any) => prop.key === key);
        if (found) {
            return found;
        }
        if (group.propertyGroups) {
            const nested = findProperty(group.propertyGroups, key);
            if (nested) {
                return nested;
            }
        }
    }
    return undefined;
}

export function getProperties(values: TabsListPreviewProps, defaultProperties: Properties): Properties {
    const tabsProperty = findProperty(defaultProperties, "tabs");

    values.tabs.forEach((tab, index) => {
        if (tab.iconPosition !== "none") {
            return;
        }
        // Hide the per-row icon DropZone when no icon is used, so it is neither shown
        // in the properties panel nor required to be rendered in the preview.
        const row = tabsProperty?.objects?.[index];
        row?.properties.forEach((group: any) => {
            if (group.properties) {
                group.properties = group.properties.filter((prop: any) => prop.key !== "icon");
            }
        });
    });

    return defaultProperties;
}
