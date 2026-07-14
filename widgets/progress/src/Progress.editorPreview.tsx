import { ReactElement, createElement } from "react";
import { ProgressPreviewProps } from "../typings/ProgressProps";

export function preview(_props: ProgressPreviewProps): ReactElement {
    return <div className="mantine-Progress-root">Progress</div>;
}
