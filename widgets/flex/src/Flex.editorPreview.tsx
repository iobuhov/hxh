import { ReactElement, createElement } from "react";
import { FlexPreviewProps } from "../typings/FlexProps";

export function preview({ text }: FlexPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
