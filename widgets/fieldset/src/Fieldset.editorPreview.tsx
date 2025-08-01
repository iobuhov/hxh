import { ReactElement, createElement } from "react";
import { FieldsetPreviewProps } from "../typings/FieldsetProps";

export function preview({ text }: FieldsetPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
