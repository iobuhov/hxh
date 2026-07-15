import { ReactElement, createElement } from "react";
import { ProgressPreviewProps } from "../typings/ProgressProps";

const SIZE_HEIGHT: Record<string, number> = { xs: 4, sm: 6, md: 8, lg: 12, xl: 16 };
const SEGMENTS = ["var(--mantine-color-blue-6, #228be6)", "var(--mantine-color-teal-6, #12b886)", "var(--mantine-color-orange-6, #fd7e14)"];

export function preview(props: ProgressPreviewProps): ReactElement {
    const height = SIZE_HEIGHT[props.size] ?? 8;
    const radius = SIZE_HEIGHT[props.radius] ?? 8;

    if (props.mode === "sections") {
        return (
            <div style={{ display: "flex", width: "100%", height, borderRadius: radius, overflow: "hidden", gap: 2 }}>
                {SEGMENTS.map((c, i) => (
                    <div key={i} style={{ flex: [3, 2, 1][i], backgroundColor: c }} />
                ))}
            </div>
        );
    }

    return (
        <div style={{ width: "100%", height, borderRadius: radius, backgroundColor: "var(--mantine-color-gray-2, #e9ecef)" }}>
            <div style={{ width: "60%", height: "100%", borderRadius: radius, backgroundColor: "var(--mantine-color-blue-6, #228be6)" }} />
        </div>
    );
}
