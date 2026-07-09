import { ReactElement, createElement } from "react";
import { SimpleGridPreviewProps } from "../typings/SimpleGridProps";

const SPACING: Record<string, number> = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export function preview({ children, cols, spacing, styleObject }: SimpleGridPreviewProps): ReactElement {
    const Children = children.renderer;
    const gapValue = SPACING[spacing] ?? spacing ?? 16;

    return (
        <div className="mantine-SimpleGrid-root">
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols || 1}, 1fr)`,
                    gap: gapValue,
                    ...styleObject
                }}
            >
                <Children>
                    <div style={{ display: "contents" }} />
                </Children>
            </div>
        </div>
    );
}
