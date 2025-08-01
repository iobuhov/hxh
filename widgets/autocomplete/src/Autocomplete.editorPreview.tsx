import { ReactElement, createElement } from "react";
import { AutocompletePreviewProps } from "../typings/AutocompleteProps";

export function preview({ text }: AutocompletePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
