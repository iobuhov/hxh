import { ReactElement, createElement } from "react";
import { ActionIconPreviewProps } from "../typings/ActionIconProps";

export function preview({ text }: ActionIconPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
