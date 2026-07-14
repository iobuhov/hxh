import { ReactElement, createElement } from "react";
import { PasswordInputPreviewProps } from "../typings/PasswordInputProps";

export function preview({ label }: PasswordInputPreviewProps): ReactElement {
    return <div>{label || "PasswordInput"}</div>;
}
