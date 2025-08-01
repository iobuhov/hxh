/**
 * This file was generated from ColorPicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export interface ColorPickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    text: string;
}

export interface ColorPickerPreviewProps {
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
