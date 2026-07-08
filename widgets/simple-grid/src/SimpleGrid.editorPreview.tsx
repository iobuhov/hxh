import { ReactElement, createElement } from "react";
import { SimpleGridPreviewProps } from "../typings/SimpleGridProps";

export function preview({ children, cols }: SimpleGridPreviewProps): ReactElement {
    const Children = children.renderer;
    return (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols || 1}, 1fr)`, gap: 16 }}>
            <Children>
                <div />
            </Children>
        </div>
    );
}
