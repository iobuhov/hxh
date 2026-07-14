import { ReactElement, createElement } from "react";
import { JsonInputPreviewProps } from "../typings/JsonInputProps";

export function preview({ label }: JsonInputPreviewProps): ReactElement {
    return <div>{label || "JsonInput"}</div>;
}
