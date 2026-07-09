/**
 * This file was generated from LibFinchContext.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface LibFinchContextContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    unused?: DynamicValue<string>;
}

export interface LibFinchContextPreviewProps {
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
