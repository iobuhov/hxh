import { ReactElement, CSSProperties, createElement } from "react";
import { BadgePreviewProps } from "../typings/BadgeProps";

// Note: we cannot render a real Mantine component here. Mantine 9 uses the React 19
// `React.use()` API, but Studio Pro's editor-preview runtime provides React 18, so
// rendering it throws "react.use is not a function". Approximate the look with plain DOM.

export function preview(props: BadgePreviewProps): ReactElement {
    const text = props.content || "Badge";

    const style: CSSProperties = {
        display: props.fullWidth ? "block" : "inline-block",
        padding: "0 var(--mantine-spacing-xs)",
        fontSize: "var(--mantine-font-size-xs)",
        fontWeight: 700,
        textTransform: "uppercase",
        lineHeight: "1.5rem",
        borderRadius: `var(--mantine-radius-${props.radius})`,
        backgroundColor: "var(--mantine-color-gray-1, #f1f3f5)",
        color: "var(--mantine-color-gray-7, #495057)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "center"
    };

    return <span style={style}>{text}</span>;
}
