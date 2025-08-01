import { ReactElement, createElement } from "react";
import { LoaderPreviewProps } from "../typings/LoaderProps";

export function preview({ text }: LoaderPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
