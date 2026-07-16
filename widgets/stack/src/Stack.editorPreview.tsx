import { ReactElement, createElement } from "react";
import { StackPreviewProps } from "../typings/StackProps";

const SPACING: Record<string, number> = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export function preview({ children, gap, styleObject }: StackPreviewProps): ReactElement {
    const Children = children.renderer;
    const gapValue = SPACING[gap] ?? gap ?? 16;

    return (
        <div
            className="mantine-Stack-root"
            style={{ display: "flex", flexDirection: "column", gap: gapValue, ...styleObject }}
        >
            <Children>
                <div style={{ display: "contents" }} />
            </Children>
        </div>
    );
}
