import { ReactElement, createElement } from "react";
import { GroupPreviewProps } from "../typings/GroupProps";

export function preview({ text }: GroupPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
