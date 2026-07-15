import { ProgressPreviewProps } from "../typings/ProgressProps";
import { Properties } from "../typings/editor-types";

// Hide the property group that does not apply to the selected mode, so only the relevant
// configuration (Single value or Sections) is shown in Studio Pro.
/* eslint-disable @typescript-eslint/no-explicit-any */
export function getProperties(values: ProgressPreviewProps, defaultProperties: Properties): Properties {
    const hiddenGroup = values.mode === "sections" ? "Single value" : "Sections";
    return (defaultProperties as any[]).filter(group => group.caption !== hiddenGroup) as Properties;
}
