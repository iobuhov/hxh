import { AlertPreviewProps } from "../typings/AlertProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: AlertPreviewProps, schema: Properties): Properties {
    return schema;
}
