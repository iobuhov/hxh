import { ReactElement, createElement } from "react";
import { BarsListPreviewProps } from "../typings/BarsListProps";

export function preview({ text }: BarsListPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
