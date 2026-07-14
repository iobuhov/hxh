import { ReactElement, createElement } from "react";
import { AlertPreviewProps } from "../typings/AlertProps";

// A plain-DOM approximation of Mantine's Alert. We cannot render the real
// component here: Mantine 9 uses React 19's `React.use()`, but Studio Pro's
// editor-preview runtime provides React 18 ("react.use is not a function").

export function preview(props: AlertPreviewProps): ReactElement {
    const bg = `var(--mantine-color-${props.color}-light, #e7f5ff)`;
    const fg = `var(--mantine-color-${props.color}-light-color, #1971c2)`;

    return (
        <div
            className="mantine-Alert-root"
            style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 8,
                padding: "var(--mantine-spacing-md, 16px)",
                borderRadius: `var(--mantine-radius-${props.radius}, 4px)`,
                backgroundColor: bg,
                color: fg
            }}
        >
            <div>
                {props.title && <div style={{ fontWeight: 700, marginBottom: 4 }}>{props.title}</div>}
                <div>{props.message || "Alert message"}</div>
            </div>
            {props.withCloseButton && <span style={{ opacity: 0.6 }}>×</span>}
        </div>
    );
}
