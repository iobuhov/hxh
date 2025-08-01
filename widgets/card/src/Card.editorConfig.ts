import { CardPreviewProps } from "../typings/CardProps";
import { Properties } from "../typings/editor-types";

export function getProperties(_values: CardPreviewProps, schema: Properties): Properties {
    return schema;
}
