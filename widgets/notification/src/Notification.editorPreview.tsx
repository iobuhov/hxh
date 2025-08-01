import { ReactElement, createElement } from "react";
import { NotificationPreviewProps } from "../typings/NotificationProps";

export function preview({ text }: NotificationPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
