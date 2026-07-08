import { ReactElement, createElement } from "react";
import { StackPreviewProps } from "../typings/StackProps";

export function preview({ children }: StackPreviewProps): ReactElement {
    const Children = children.renderer;
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Children>
                <div />
            </Children>
        </div>
    );
}
