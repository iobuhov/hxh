import { CSSProperties, ReactElement, createElement, useState } from "react";
import { FloatingIndicator as MantineFloatingIndicator } from "../../mantine/mantine.main.mjs";
import { FloatingIndicatorContainerProps } from "../typings/FloatingIndicatorProps";

const rootStyle = (grow: boolean, radius: string): CSSProperties => ({
    position: "relative",
    display: "inline-flex",
    flexDirection: "row",
    width: grow ? "100%" : undefined,
    padding: 4,
    gap: 4,
    borderRadius: radius,
    backgroundColor: "var(--mantine-color-gray-1, #f1f3f5)"
});

const controlStyle = (grow: boolean, active: boolean, readOnly: boolean): CSSProperties => ({
    position: "relative",
    zIndex: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    flex: grow ? 1 : undefined,
    padding: "8px 16px",
    border: "none",
    background: "transparent",
    cursor: readOnly ? "not-allowed" : "pointer",
    fontSize: "var(--mantine-font-size-sm, 14px)",
    fontWeight: active ? 600 : 400,
    color: active ? "var(--mantine-color-text, #000)" : "var(--mantine-color-dimmed, #868e96)",
    whiteSpace: "nowrap"
});

const indicatorStyle = (radius: string): CSSProperties => ({
    backgroundColor: "var(--mantine-color-white, #fff)",
    borderRadius: radius,
    boxShadow: "var(--mantine-shadow-sm, 0 1px 3px rgba(0,0,0,.1))"
});

export function FloatingIndicator(props: FloatingIndicatorContainerProps): ReactElement {
    const { value, controls, grow, transitionDuration } = props;
    const radius = props.radius || "var(--mantine-radius-default, 8px)";

    const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
    const [controlRefs, setControlRefs] = useState<Record<string, HTMLButtonElement | null>>({});
    // Mutate the same object reference (Mantine's documented pattern): passing an unchanged
    // reference lets React bail out of re-rendering, avoiding a callback-ref update loop.
    const setControlRef = (key: string) => (node: HTMLButtonElement | null): void => {
        controlRefs[key] = node;
        setControlRefs(controlRefs);
    };

    const items = controls ?? [];
    const active = value.status === "available" && value.value != null ? value.value : null;

    const handleClick = (next: string): void => {
        if (value.readOnly || next === active) {
            return;
        }
        value.setValue(next);
        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    const duration = transitionDuration ? Number(transitionDuration) : 150;

    return (
        <div className={props.class} style={props.style}>
            <div ref={setRootRef} style={rootStyle(grow, radius)}>
                {items.map(item => {
                    const controlValue = item.controlValue;
                    const isActive = controlValue === active;
                    const icon = item.iconPosition !== "none" ? item.icon : undefined;
                    return (
                        <button
                            type="button"
                            key={controlValue}
                            ref={setControlRef(controlValue)}
                            style={controlStyle(grow, isActive, value.readOnly)}
                            data-active={isActive || undefined}
                            disabled={value.readOnly}
                            onClick={() => handleClick(controlValue)}
                        >
                            {item.iconPosition === "left" && icon}
                            <span>{item.label}</span>
                            {item.iconPosition === "right" && icon}
                        </button>
                    );
                })}

                <MantineFloatingIndicator
                    target={active != null ? controlRefs[active] : null}
                    parent={rootRef}
                    transitionDuration={duration}
                    style={indicatorStyle(radius)}
                />
            </div>
        </div>
    );
}
