import { createElement, ReactElement } from "react";
import { ScrollAreaPreviewProps } from "../typings/ScrollAreaProps";

export function preview({ children }: ScrollAreaPreviewProps): ReactElement {
    const Children = children.renderer;
    return (
        <div style={{ border: "1px dashed #adb5bd", borderRadius: 4, padding: 8, minHeight: 60 }}>
            <div style={{ fontSize: 11, color: "#868e96", marginBottom: 4 }}>ScrollArea</div>
            <Children>
                <div />
            </Children>
        </div>
    );
}
