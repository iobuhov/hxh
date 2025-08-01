import { FileInputPreviewProps } from "../typings/FileInputProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: FileInputPreviewProps, schema: Properties): Properties {
    return schema;
}
