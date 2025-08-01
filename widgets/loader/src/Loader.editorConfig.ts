import { LoaderPreviewProps } from "../typings/LoaderProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: LoaderPreviewProps, schema: Properties): Properties {
    return schema;
}
