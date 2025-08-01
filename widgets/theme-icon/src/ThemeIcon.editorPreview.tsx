import { ReactElement, createElement } from "react";
import { ThemeIconPreviewProps } from "../typings/ThemeIconProps";

export function preview({ text }: ThemeIconPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
