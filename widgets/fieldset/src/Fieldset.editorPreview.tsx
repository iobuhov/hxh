import { ReactElement, CSSProperties, createElement } from "react";
import { FieldsetPreviewProps } from "../typings/FieldsetProps";

// A plain-DOM approximation of Mantine's Fieldset. We cannot render the real
// component here: Mantine 9 uses React 19's `React.use()`, but Studio Pro's
// editor-preview runtime provides React 18 ("react.use is not a function").

export function preview(props: FieldsetPreviewProps): ReactElement {
    const Content = props.content.renderer;
    const unstyled = props.variant === "unstyled";

    const style: CSSProperties = {
        border: unstyled ? "none" : "1px solid var(--mantine-color-gray-4, #ced4da)",
        borderRadius: unstyled ? undefined : `var(--mantine-radius-${props.radius})`,
        padding: unstyled ? 0 : "var(--mantine-spacing-md)",
        margin: 0,
        backgroundColor: props.variant === "filled" ? "var(--mantine-color-gray-0, #f8f9fa)" : "transparent",
        opacity: props.disabled ? 0.6 : 1
    };

    return (
        <fieldset className="mantine-Fieldset-root" style={style}>
            {props.legend && (
                <legend style={{ padding: "0 var(--mantine-spacing-xs)", fontWeight: 500 }}>{props.legend}</legend>
            )}
            <Content>
                <div style={{ display: "contents" }} />
            </Content>
        </fieldset>
    );
}
