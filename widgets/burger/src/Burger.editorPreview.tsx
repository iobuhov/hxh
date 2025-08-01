import { ReactElement, createElement } from "react";
import { BurgerPreviewProps } from "../typings/BurgerProps";

export function preview({ text }: BurgerPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
