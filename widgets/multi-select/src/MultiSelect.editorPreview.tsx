import { ReactElement, createElement } from "react";
import { MultiSelectPreviewProps } from "../typings/MultiSelectProps";

export function preview({ text }: MultiSelectPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
