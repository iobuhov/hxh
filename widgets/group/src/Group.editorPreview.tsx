import { ReactElement, createElement } from "react";
import { GroupPreviewProps } from "../typings/GroupProps";

export function preview({ children }: GroupPreviewProps): ReactElement {
    const Children = children.renderer;
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Children>
                <div />
            </Children>
        </div>
    );
}
