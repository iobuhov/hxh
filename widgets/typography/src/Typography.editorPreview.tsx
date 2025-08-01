import { ReactElement, createElement } from "react";
import { TypographyPreviewProps } from "../typings/TypographyProps";

export function preview({ text }: TypographyPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
