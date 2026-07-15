import { ReactElement, createElement } from "react";
import { SegmentedControlPreviewProps } from "../typings/SegmentedControlProps";

// Plain-DOM approximation of Mantine's SegmentedControl (Mantine can't render in Studio
// Pro's React 18 preview runtime). Shows the static segments with the first one active;
// for a data source the item count is unknown at design time, so placeholders are shown.

function labels(props: SegmentedControlPreviewProps): string[] {
    if (props.dataSourceType === "static" && props.staticItems.length > 0) {
        return props.staticItems.map((item, index) => item.itemLabel || `Segment ${index + 1}`);
    }
    return ["Segment 1", "Segment 2", "Segment 3"];
}

export function preview(props: SegmentedControlPreviewProps): ReactElement {
    const vertical = props.orientation === "vertical";
    return (
        <div
            style={{
                display: "inline-flex",
                flexDirection: vertical ? "column" : "row",
                gap: 4,
                padding: 4,
                borderRadius: 8,
                backgroundColor: "var(--mantine-color-gray-1, #f1f3f5)",
                width: props.fullWidth ? "100%" : undefined
            }}
        >
            {labels(props).map((label, index) => {
                const active = index === 0;
                return (
                    <div
                        key={index}
                        style={{
                            flex: props.fullWidth ? 1 : undefined,
                            textAlign: "center",
                            padding: "8px 16px",
                            borderRadius: 6,
                            fontWeight: active ? 600 : 400,
                            color: active
                                ? "var(--mantine-color-text, #000)"
                                : "var(--mantine-color-dimmed, #868e96)",
                            backgroundColor: active ? "var(--mantine-color-white, #fff)" : "transparent",
                            boxShadow: active ? "0 1px 3px rgba(0,0,0,.1)" : undefined,
                            borderRight:
                                props.withItemsBorders && !vertical && !active
                                    ? "1px solid var(--mantine-color-gray-3, #dee2e6)"
                                    : undefined
                        }}
                    >
                        {label}
                    </div>
                );
            })}
        </div>
    );
}
