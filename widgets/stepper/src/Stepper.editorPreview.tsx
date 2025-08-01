import { ReactElement, createElement } from "react";
import { StepperPreviewProps } from "../typings/StepperProps";

export function preview({ text }: StepperPreviewProps): ReactElement {
    return <div>Preview {text}</div>;
}
