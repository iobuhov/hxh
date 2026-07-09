import { ReactElement, createElement } from "react";
import { GroupPreviewProps } from "../typings/GroupProps";

const SPACING: Record<string, number> = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export function preview({ children, gap, justify, styleObject }: GroupPreviewProps): ReactElement {
    const Children = children.renderer;
    const gapValue = SPACING[gap] ?? gap ?? 16;

    return (
        <div
            className="mantine-Group-root"
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: gapValue,
                alignItems: "center",
                justifyContent: justify || "flex-start",
                ...styleObject
            }}
        >
            <Children>
                <div style={{ display: "contents" }} />
            </Children>
        </div>
    );
}
