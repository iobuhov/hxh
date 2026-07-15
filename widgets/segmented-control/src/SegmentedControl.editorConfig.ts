import { SegmentedControlPreviewProps } from "../typings/SegmentedControlProps";
import { Properties } from "../typings/editor-types";

// Hide the property group that does not apply to the selected items source, so only the
// relevant configuration (Static items or Data source items) is shown in Studio Pro.
/* eslint-disable @typescript-eslint/no-explicit-any */
export function getProperties(values: SegmentedControlPreviewProps, defaultProperties: Properties): Properties {
    const hiddenGroup = values.dataSourceType === "datasource" ? "Static items" : "Data source items";
    return (defaultProperties as any[]).filter(group => group.caption !== hiddenGroup) as Properties;
}
