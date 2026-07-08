/**
 * This file was generated from LibLucide.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface LibLucideContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    unused?: DynamicValue<string>;
}

export interface LibLucidePreviewProps {
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
    unused: string;
}
