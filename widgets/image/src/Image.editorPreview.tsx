import { ReactElement, createElement } from "react";
import { ImagePreviewProps } from "../typings/ImageProps";

// Plain-DOM approximation of Mantine's Image. The real component can't render
// here (Mantine relies on React 19's `React.use()`, unavailable in Studio Pro's
// React 18 preview runtime). The `src` is a template string at design time, so
// we show a themed placeholder box with an image glyph instead.

function radiusValue(r: string): string {
    const key = r || "sm";
    if (["xs", "sm", "md", "lg", "xl"].includes(key)) {
        return `var(--mantine-radius-${key})`;
    }
    return /^\d+$/.test(key) ? `${key}px` : key;
}

export function preview(props: ImagePreviewProps): ReactElement {
    return (
        <div
            className="mantine-Image-root"
            style={{
                width: props.width || 120,
                height: props.height || 80,
                borderRadius: radiusValue(props.radius),
                backgroundColor: "var(--mantine-color-gray-2, #e9ecef)",
                color: "var(--mantine-color-gray-5, #adb5bd)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                overflow: "hidden"
            }}
        >
            🖼
        </div>
    );
}
