import { ReactElement, createElement } from "react";
import { AccordionPreviewProps } from "../typings/AccordionProps";

export function preview({ text }: AccordionPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
