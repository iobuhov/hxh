import { ReactElement, createElement } from "react";
import { AvatarPreviewProps } from "../typings/AvatarProps";

export function preview({ text }: AvatarPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
