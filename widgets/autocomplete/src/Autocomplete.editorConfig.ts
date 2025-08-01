import { AutocompletePreviewProps } from "../typings/AutocompleteProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: AutocompletePreviewProps, schema: Properties): Properties {
    return schema;
}
