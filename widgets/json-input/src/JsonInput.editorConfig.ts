import { JsonInputPreviewProps } from "../typings/JsonInputProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: JsonInputPreviewProps, schema: Properties): Properties {
    return schema;
}
