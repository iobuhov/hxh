import { ReactElement, createElement } from "react";
import { CardPreviewProps } from "../typings/CardProps";

export function preview({ children }: CardPreviewProps): ReactElement {
    const Children = children.renderer;
    return (
        <div style={{ border: "1px solid #dee2e6", borderRadius: 8, padding: 16 }}>
            <Children>
                <div />
            </Children>
        </div>
    );
}
