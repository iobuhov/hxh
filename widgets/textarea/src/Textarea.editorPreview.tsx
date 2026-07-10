import { ReactElement, createElement } from "react";
import { TextareaPreviewProps, SizeEnum } from "../typings/TextareaProps";

// A plain-DOM approximation of Mantine's Textarea. We cannot render the real
// component here: Mantine 9 uses React 19's `React.use()`, but Studio Pro's
// editor-preview runtime provides React 18 ("react.use is not a function").

const LINE_HEIGHT_MAP: Record<SizeEnum, number> = {
    xs: 18,
    sm: 21,
    md: 24,
    lg: 27,
    xl: 30
};

export function preview(props: TextareaPreviewProps): ReactElement {
    const disabled = props.disabled || props.readOnly;
    const fontSize = `var(--mantine-font-size-${props.size})`;
    const dimmed = "var(--mantine-color-placeholder, #adb5bd)";
    const rows = Math.max(props.minRows || 2, 2);

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
                    minHeight: rows * LINE_HEIGHT_MAP[props.size] + 12,
                    padding: "6px var(--mantine-spacing-sm)",
                    border: "1px solid var(--mantine-color-gray-4, #ced4da)",
                    borderRadius: `var(--mantine-radius-${props.radius})`,
                    backgroundColor: disabled ? "var(--mantine-color-gray-1, #f1f3f5)" : "var(--mantine-color-body, #fff)",
                    opacity: disabled ? 0.6 : 1,
                    color: dimmed,
                    resize: props.resize === "none" ? "none" : (props.resize as "vertical" | "horizontal" | "both"),
                    overflow: "hidden"
                }}
            >
                {props.placeholder || "Text"}
            </div>
        </div>
    );
}
