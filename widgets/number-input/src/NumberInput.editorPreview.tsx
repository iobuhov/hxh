import { ReactElement, CSSProperties, createElement } from "react";
import { NumberInputPreviewProps, SizeEnum } from "../typings/NumberInputProps";

// Note: we cannot render a real Mantine component here. Mantine 9 uses the React 19
// `React.use()` API, but Studio Pro's editor-preview runtime provides React 18, so
// rendering it throws "react.use is not a function". Approximate the look with plain DOM.

const HEIGHT_MAP: Record<SizeEnum, number> = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 50,
    xl: 60
};

export function preview(props: NumberInputPreviewProps): ReactElement {
    const disabled = props.disabled || props.readOnly;
    const fontSize = `var(--mantine-font-size-${props.size})`;
    const dimmed = "var(--mantine-color-placeholder, #adb5bd)";

    const sectionStyle: CSSProperties = {
        display: "flex",
        alignItems: "center",
        padding: "0 var(--mantine-spacing-xs)",
        color: dimmed,
        whiteSpace: "nowrap"
    };

    return (
        <div className="mantine-InputWrapper-root" style={{ fontSize }}>
            {props.label && (
                <div
                    style={{
                        fontSize,
                        fontWeight: 500,
                        marginBottom: 2,
                        color: "var(--mantine-color-text, #000)"
                    }}
                >
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
                    border: "1px solid var(--mantine-color-gray-4, #ced4da)",
                    borderRadius: `var(--mantine-radius-${props.radius})`,
                    backgroundColor: disabled ? "var(--mantine-color-gray-1, #f1f3f5)" : "var(--mantine-color-body, #fff)",
                    opacity: disabled ? 0.6 : 1,
                    overflow: "hidden"
                }}
            >
                {props.prefix && <span style={sectionStyle}>{props.prefix}</span>}
                <span
                    style={{
                        flex: 1,
                        padding: "0 var(--mantine-spacing-sm)",
                        color: dimmed,
                        fontSize,
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}
                >
                    {props.placeholder || "Number"}
                </span>
                {props.suffix && <span style={sectionStyle}>{props.suffix}</span>}
                {!props.hideControls && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 24,
                            alignSelf: "stretch",
                            borderLeft: "1px solid var(--mantine-color-gray-4, #ced4da)",
                            color: dimmed,
                            fontSize: 8,
                            lineHeight: 1.2
                        }}
                    >
                        <span>▲</span>
                        <span>▼</span>
                    </div>
                )}
            </div>
        </div>
    );
}
