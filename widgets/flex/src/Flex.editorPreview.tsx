import { ReactElement, createElement } from "react";
import { FlexPreviewProps } from "../typings/FlexProps";

const SPACING: Record<string, number> = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export function preview({ children, direction, gap, align, justify, wrap }: FlexPreviewProps): ReactElement {
    const Children = children.renderer;
    const gapValue = SPACING[gap] ?? gap ?? 16;

    return (
        <div className="finch-flex-preview">
            <style>{`.finch-flex-preview [data-drop-zone="true"] { display: contents; }`}</style>
            <div
                style={{
                    display: "flex",
                    flexDirection: (direction as any) || "row",
                    gap: gapValue,
                    alignItems: align || "stretch",
                    justifyContent: justify || "flex-start",
                    flexWrap: (wrap as any) || "nowrap"
                }}
            >
                <Children>
                    <div />
                </Children>
            </div>
        </div>
    );
}
