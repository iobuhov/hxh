import { ReactElement, createElement } from "react";
import { TabsListPreviewProps, TabsPreviewType } from "../typings/TabsListProps";

const JUSTIFY: Record<string, string> = {
    flexStart: "flex-start",
    center: "center",
    flexEnd: "flex-end",
    spaceBetween: "space-between"
};

// Plain-DOM approximation of Mantine's Tabs.List (Mantine can't render in Studio Pro's
// React 18 preview runtime). Renders the tab strip; each tab shows the icon DropZone
// only when its icon position is left or right.

function renderTab(tab: TabsPreviewType, index: number, grow: boolean): ReactElement {
    // `tab.icon` is undefined when iconPosition is "none" (the DropZone is hidden via getProperties).
    let iconSlot: ReactElement | null = null;
    if (tab.iconPosition !== "none" && tab.icon) {
        const Icon = tab.icon.renderer;
        iconSlot = (
            <Icon caption="Icon">
                <span style={{ display: "inline-flex" }} />
            </Icon>
        );
    }

    return (
        <div
            key={index}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "8px 12px",
                flex: grow ? 1 : undefined,
                color: index === 0 ? "var(--mantine-color-text, #000)" : "var(--mantine-color-dimmed, #868e96)",
                fontWeight: index === 0 ? 600 : 400,
                borderBottom: index === 0 ? "2px solid var(--mantine-primary-color-filled)" : "2px solid transparent"
            }}
        >
            {tab.iconPosition === "left" && iconSlot}
            <span>{tab.label || "Tab"}</span>
            {tab.iconPosition === "right" && iconSlot}
        </div>
    );
}

export function preview(props: TabsListPreviewProps): ReactElement {
    return (
        <div
            className="mantine-Tabs-list"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: JUSTIFY[props.justify] || "flex-start",
                gap: 4,
                borderBottom: "2px solid var(--mantine-color-gray-3, #dee2e6)"
            }}
        >
            {props.tabs.length > 0
                ? props.tabs.map((tab, index) => renderTab(tab, index, props.grow))
                : [
                      <div key="p1" style={{ padding: "8px 12px", fontWeight: 600 }}>
                          Tab 1
                      </div>,
                      <div key="p2" style={{ padding: "8px 12px", color: "var(--mantine-color-dimmed, #868e96)" }}>
                          Tab 2
                      </div>
                  ]}
        </div>
    );
}
