import { ReactElement, createElement } from "react";
import { FloatingIndicatorPreviewProps, ControlsPreviewType } from "../typings/FloatingIndicatorProps";

// Plain-DOM approximation of the widget (Mantine can't render in Studio Pro's React 18
// preview runtime). Renders the control group with the first control shown as active.

function renderControl(control: ControlsPreviewType, index: number, grow: boolean): ReactElement {
    let iconSlot: ReactElement | null = null;
    if (control.iconPosition !== "none" && control.icon) {
        const Icon = control.icon.renderer;
        iconSlot = (
            <Icon caption="Icon">
                <span style={{ display: "inline-flex" }} />
            </Icon>
        );
    }

    const active = index === 0;
    return (
        <div
            key={index}
            style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                flex: grow ? 1 : undefined,
                padding: "8px 16px",
                borderRadius: 6,
                fontWeight: active ? 600 : 400,
                color: active ? "var(--mantine-color-text, #000)" : "var(--mantine-color-dimmed, #868e96)",
                backgroundColor: active ? "var(--mantine-color-white, #fff)" : "transparent",
                boxShadow: active ? "0 1px 3px rgba(0,0,0,.1)" : undefined
            }}
        >
            {control.iconPosition === "left" && iconSlot}
            <span>{control.label || "Control"}</span>
            {control.iconPosition === "right" && iconSlot}
        </div>
    );
}

export function preview(props: FloatingIndicatorPreviewProps): ReactElement {
    return (
        <div
            style={{
                display: "inline-flex",
                flexDirection: "row",
                gap: 4,
                padding: 4,
                borderRadius: 8,
                backgroundColor: "var(--mantine-color-gray-1, #f1f3f5)",
                width: props.grow ? "100%" : undefined
            }}
        >
            {props.controls.length > 0
                ? props.controls.map((control, index) => renderControl(control, index, props.grow))
                : [
                      <div
                          key="p1"
                          style={{
                              padding: "8px 16px",
                              fontWeight: 600,
                              borderRadius: 6,
                              backgroundColor: "var(--mantine-color-white, #fff)",
                              boxShadow: "0 1px 3px rgba(0,0,0,.1)"
                          }}
                      >
                          Control 1
                      </div>,
                      <div key="p2" style={{ padding: "8px 16px", color: "var(--mantine-color-dimmed, #868e96)" }}>
                          Control 2
                      </div>
                  ]}
        </div>
    );
}
