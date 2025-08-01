import { ReactElement, createElement } from "react";
import { TagsInputPreviewProps } from "../typings/TagsInputProps";

export function preview({ text }: TagsInputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
