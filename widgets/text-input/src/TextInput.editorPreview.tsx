import { ReactElement, createElement } from "react";
import { TextInputPreviewProps, SizeEnum } from "../typings/TextInputProps";

// A plain-DOM approximation of Mantine's TextInput. We cannot render the real
// component here: Mantine 9 uses React 19's `React.use()`, but Studio Pro's
// editor-preview runtime provides React 18 ("react.use is not a function").

const HEIGHT_MAP: Record<SizeEnum, number> = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 50,
    xl: 60
};

export function preview(props: TextInputPreviewProps): ReactElement {
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
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {props.placeholder || "Text"}
                </span>
            </div>
        </div>
    );
}
