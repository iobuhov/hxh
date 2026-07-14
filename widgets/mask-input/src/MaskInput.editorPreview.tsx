import { ReactElement, createElement } from "react";
import { MaskInputPreviewProps, SizeEnum } from "../typings/MaskInputProps";

const HEIGHT_MAP: Record<SizeEnum, number> = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 50,
    xl: 60
};

export function preview(props: MaskInputPreviewProps): ReactElement {
    const disabled = props.disabled || props.readOnly;
    const dimmed = "var(--mantine-color-placeholder, #adb5bd)";

    return (
        <div className="mantine-InputWrapper-root">
            {props.label && (
                <div style={{ fontWeight: 500, marginBottom: 2, color: "var(--mantine-color-text, #000)" }}>
                    {props.label}
                    {props.required && <span style={{ color: "var(--mantine-color-error, #e03131)" }}> *</span>}
                </div>
            )}
            {props.description && <div style={{ color: dimmed, marginBottom: 4 }}>{props.description}</div>}
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
                    {props.placeholder || props.mask || ""}
                </span>
            </div>
        </div>
    );
}
