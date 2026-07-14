import { ReactElement, createElement } from "react";
import { RadioPreviewProps } from "../typings/RadioProps";

export function preview(props: RadioPreviewProps): ReactElement {
    const horizontal = props.orientation === "horizontal";
    const dimmed = "var(--mantine-color-placeholder, #adb5bd)";

    const dot = (
        <span
            style={{
                display: "inline-block",
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: "1px solid var(--mantine-color-gray-4, #ced4da)",
                backgroundColor: "var(--mantine-color-body, #fff)",
                flex: "0 0 auto"
            }}
        />
    );

    return (
        <div className="mantine-InputWrapper-root">
            {props.label && (
                <div style={{ fontWeight: 500, marginBottom: 2, color: "var(--mantine-color-text, #000)" }}>
                    {props.label}
                    {props.required && <span style={{ color: "var(--mantine-color-error, #e03131)" }}> *</span>}
                </div>
            )}
            {props.description && <div style={{ color: dimmed, marginBottom: 4 }}>{props.description}</div>}
            <div style={{ display: "flex", flexDirection: horizontal ? "row" : "column", gap: 8, marginTop: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {dot}
                    <span style={{ color: "var(--mantine-color-text, #000)" }}>Option 1</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {dot}
                    <span style={{ color: "var(--mantine-color-text, #000)" }}>Option 2</span>
                </div>
            </div>
        </div>
    );
}
