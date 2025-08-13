import { ReactElement, createElement } from "react";
import { ThemeProviderPreviewProps } from "../typings/ThemeProviderProps";

export function preview({ text }: ThemeProviderPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
