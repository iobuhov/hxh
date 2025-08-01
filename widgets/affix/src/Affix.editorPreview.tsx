import { ReactElement, createElement } from "react";
import { AffixPreviewProps } from "../typings/AffixProps";

export function preview({ text }: AffixPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
