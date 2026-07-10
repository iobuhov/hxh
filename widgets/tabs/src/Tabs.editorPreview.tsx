import { ReactElement, createElement } from "react";
import { TabsPreviewProps } from "../typings/TabsProps";

// Plain-DOM approximation of Mantine's Tabs root. The tab strip and panels are
// separate child widgets (TabsList / TabPanel), so this just renders the DropZone.

export function preview(props: TabsPreviewProps): ReactElement {
    const Content = props.content.renderer;
    const vertical = props.orientation === "vertical";

    return (
        <div className="mantine-Tabs-root" style={{ display: "flex", flexDirection: vertical ? "row" : "column" }}>
            <Content caption="Tabs list & panels">
                <div style={{ display: "contents" }} />
            </Content>
        </div>
    );
}
