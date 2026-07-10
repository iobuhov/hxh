import { ReactElement, createElement } from "react";
import { AvatarPreviewProps } from "../typings/AvatarProps";

// Plain-DOM approximation of Mantine's Avatar. The real component can't render
// here (Mantine 9 relies on React 19's `React.use()`, unavailable in Studio Pro's
// React 18 preview runtime). The image `src` is a template string at design time,
// so we show the derived initials / a placeholder instead of the actual image.

const SIZE_MAP: Record<string, number> = { xs: 16, sm: 26, md: 38, lg: 56, xl: 84 };

function radiusValue(r: string): string {
    if (!r) {
        return "50%";
    }
    if (r in SIZE_MAP) {
        return `var(--mantine-radius-${r})`;
    }
    return /^\d+$/.test(r) ? `${r}px` : r;
}

export function preview(props: AvatarPreviewProps): ReactElement {
    const size = /^\d+$/.test(props.size) ? Number(props.size) : (SIZE_MAP[props.size] ?? 38);
    const initials = (props.userName || "")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(word => word.charAt(0).toUpperCase())
        .join("");

    return (
        <div
            className="mantine-Avatar-root"
            style={{
                width: size,
                height: size,
                borderRadius: radiusValue(props.radius),
                backgroundColor: "var(--mantine-color-gray-2, #e9ecef)",
                color: "var(--mantine-color-gray-6, #868e96)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: Math.round(size * 0.4),
                fontWeight: 500,
                overflow: "hidden",
                flex: "none"
            }}
        >
            {initials}
        </div>
    );
}
