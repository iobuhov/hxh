import { ReactElement, createElement } from "react";
import { PanelLeft } from "lucide-react";
import { NavTogglePreviewProps } from "../typings/NavToggleProps";

export function preview(_props: NavTogglePreviewProps): ReactElement {
    return (
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28 }}>
            <PanelLeft size={18} strokeWidth={1.5} />
        </div>
    );
}
