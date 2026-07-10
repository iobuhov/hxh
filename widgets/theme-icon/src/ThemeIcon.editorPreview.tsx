import { ReactElement, CSSProperties, createElement } from "react";
import { ThemeIconPreviewProps } from "../typings/ThemeIconProps";

// A plain-DOM approximation of Mantine's ThemeIcon. We cannot render the real
// component here: Mantine uses React 19's `React.use()`, but Studio Pro's
// editor-preview runtime provides React 18 ("react.use is not a function").

export function preview(props: ThemeIconPreviewProps): ReactElement {
    const radius = props.radius || "sm";

    const style: CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: `var(--mantine-radius-${radius}, ${radius})`,
        backgroundColor: "var(--mantine-color-gray-2, #e9ecef)"
    };

    const Content = props.content && props.content.renderer;

    return (
        <div className="mantine-ThemeIcon-root" style={style}>
            {Content ? (
                <Content caption="Icon">
                    <span style={{ display: "inline-flex" }} />
                </Content>
            ) : null}
        </div>
    );
}
