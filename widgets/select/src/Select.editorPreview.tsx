import { ReactElement, createElement } from "react";
import { SelectPreviewProps, SizeEnum } from "../typings/SelectProps";

// Plain-DOM approximation of Mantine's Select. The real component can't render here
// (Mantine 9 relies on React 19's `React.use()`, unavailable in Studio Pro's React 18
// preview runtime). Options come from a data source, so at design time we just show
// the placeholder plus a chevron.

const HEIGHT_MAP: Record<SizeEnum, number> = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 50,
    xl: 60
};

export function preview(props: SelectPreviewProps): ReactElement {
    const disabled = props.disabled || props.readOnly;
    const fontSize = `var(--mantine-font-size-${props.size})`;
    const dimmed = "var(--mantine-color-placeholder, #adb5bd)";

    return (
        <div className="mantine-InputWrapper-root" style={{ fontSize }}>
            {props.label && (
                <div style={{ fontSize, fontWeight: 500, marginBottom: 2, color: "var(--mantine-color-text, #000)" }}>
                    {props.label}
                    {props.required && <span style={{ color: "var(--mantine-color-error, #e03131)" }}> *</span>}
                </div>
            )}
            {props.description && (
                <div style={{ fontSize: "calc(0.85 * " + fontSize + ")", color: dimmed, marginBottom: 4 }}>
                    {props.description}
                </div>
            )}
            <div
                className="mantine-Input-input"
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: HEIGHT_MAP[props.size],
                    padding: "0 var(--mantine-spacing-sm)",
                    border: "1px solid var(--mantine-color-gray-4, #ced4da)",
                    borderRadius: `var(--mantine-radius-${props.radius})`,
                    backgroundColor: disabled ? "var(--mantine-color-gray-1, #f1f3f5)" : "var(--mantine-color-body, #fff)",
                    opacity: disabled ? 0.6 : 1,
                    color: dimmed,
                    overflow: "hidden"
                }}
            >
                <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {props.placeholder || "Select an option"}
                </span>
                <span style={{ marginLeft: 8, color: dimmed, fontSize: 10 }}>▼</span>
            </div>
        </div>
    );
}
