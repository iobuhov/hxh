import { ReactElement, createElement } from "react";
import { ModalPreviewProps } from "../typings/ModalProps";

export function preview({ text }: ModalPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
