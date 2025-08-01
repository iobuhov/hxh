import { ReactElement, createElement } from "react";
import { ChipPreviewProps } from "../typings/ChipProps";

export function preview({ text }: ChipPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
