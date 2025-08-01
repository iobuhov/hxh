import { ReactElement, createElement } from "react";
import { ListPreviewProps } from "../typings/ListProps";

export function preview({ text }: ListPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
