import { CodePreviewProps } from "../typings/CodeProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: CodePreviewProps, schema: Properties): Properties {
    return schema;
}
