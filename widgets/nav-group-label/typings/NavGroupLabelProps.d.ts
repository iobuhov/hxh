/**
 * This file was generated from NavGroupLabel.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface NavGroupLabelContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    text?: DynamicValue<string>;
    size: SizeEnum;
    color: string;
    fontWeight: string;
    uppercase: boolean;
}

export interface NavGroupLabelPreviewProps {
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
    size: SizeEnum;
    color: string;
    fontWeight: string;
    uppercase: boolean;
}
