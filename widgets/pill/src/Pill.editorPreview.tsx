import { ReactElement, createElement } from "react";
import { PillPreviewProps } from "../typings/PillProps";

export function preview({ text }: PillPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
