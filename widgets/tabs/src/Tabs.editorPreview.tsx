import { ReactElement, createElement } from "react";
import { TabsPreviewProps } from "../typings/TabsProps";

export function preview({ text }: TabsPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
