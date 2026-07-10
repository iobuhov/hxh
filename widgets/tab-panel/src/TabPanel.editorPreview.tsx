import { ReactElement, createElement } from "react";
import { TabPanelPreviewProps } from "../typings/TabPanelProps";

// Plain-DOM approximation. At design time all panels are shown stacked (there is no
// active-tab context here); the real widget renders inside Mantine's Tabs at runtime.

export function preview(props: TabPanelPreviewProps): ReactElement {
    const Content = props.content.renderer;

    return (
        <div
            className="mantine-Tabs-panel"
            style={{
                padding: "var(--mantine-spacing-sm)",
                border: "1px dashed var(--mantine-color-gray-4, #ced4da)",
                borderRadius: "var(--mantine-radius-sm)"
            }}
        >
            <div style={{ fontSize: 11, color: "var(--mantine-color-dimmed, #868e96)", marginBottom: 4 }}>
                Panel: {props.tabValue || "?"}
            </div>
            <Content caption={`Panel "${props.tabValue}"`}>
                <div style={{ display: "contents" }} />
            </Content>
        </div>
    );
}
