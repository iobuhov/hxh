import { createElement, ReactElement } from "react";
import { DataListBoxPreviewProps } from "../typings/DataListBoxProps";

export function preview({ content }: DataListBoxPreviewProps): ReactElement {
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
            <div style={{ fontSize: 11, color: "#868e96", marginBottom: 4 }}>DataListBox</div>
            <Content>
                <div />
            </Content>
        </div>
    );
}
