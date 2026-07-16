import { ReactElement, createElement } from "react";
import { DonutChartPreviewProps } from "../typings/DonutChartProps";

export function preview({ styleObject }: DonutChartPreviewProps): ReactElement {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                minHeight: 120,
                padding: 16,
                borderRadius: 8,
                background: "var(--mantine-color-gray-light, #f1f3f5)",
                color: "var(--mantine-color-dimmed, #868e96)",
                fontWeight: 500,
                ...styleObject
            }}
        >
            <span style={{ fontSize: 24 }}>🍩</span>
            <span>Donut Chart</span>
        </div>
    );
}
