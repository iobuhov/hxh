import { ReactElement, createElement } from "react";
import { BadgePreviewProps } from "../typings/BadgeProps";

export function preview({ text }: BadgePreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
