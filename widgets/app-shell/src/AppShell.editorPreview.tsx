import { ReactElement, createElement } from "react";
import { AppShellPreviewProps } from "../typings/AppShellProps";

export function preview({ text }: AppShellPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
