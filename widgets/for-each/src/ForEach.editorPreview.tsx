import { createElement, ReactElement } from "react";
import { ForEachPreviewProps } from "../typings/ForEachProps";

export function preview({ content }: ForEachPreviewProps): ReactElement {
    const Content = content.renderer;

    return (
        <div
            style={{
                border: "1px dashed #adb5bd",
                borderRadius: 4,
                padding: 8,
                minHeight: 80
            }}
        >
            <div style={{ fontSize: 11, color: "#868e96", marginBottom: 4 }}>ForEach</div>
            <Content>
                <div />
            </Content>
        </div>
    );
}
