/**
 * This file was generated from NumberInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export interface NumberInputContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    text: string;
}

export interface NumberInputPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    text: string;
}
