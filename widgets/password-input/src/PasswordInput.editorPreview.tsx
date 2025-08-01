import { ReactElement, createElement } from "react";
import { PasswordInputPreviewProps } from "../typings/PasswordInputProps";

export function preview({ text }: PasswordInputPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
