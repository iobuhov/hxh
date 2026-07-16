import { ReactElement, createElement } from "react";
import { RadarChartPreviewProps } from "../typings/RadarChartProps";

export function preview({ styleObject }: RadarChartPreviewProps): ReactElement {
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
            <span style={{ fontSize: 24 }}>📡</span>
            <span>Radar Chart</span>
        </div>
    );
}
