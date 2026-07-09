import { ReactElement, createElement } from "react";
import { BurgerPreviewProps } from "../typings/BurgerProps";

export function preview(_props: BurgerPreviewProps): ReactElement {
    return <div style={{ width: 24, height: 24, display: "flex", flexDirection: "column", justifyContent: "center", gap: 4 }}>
        <span style={{ display: "block", height: 2, background: "currentColor", borderRadius: 1 }} />
        <span style={{ display: "block", height: 2, background: "currentColor", borderRadius: 1 }} />
        <span style={{ display: "block", height: 2, background: "currentColor", borderRadius: 1 }} />
    </div>;
}
