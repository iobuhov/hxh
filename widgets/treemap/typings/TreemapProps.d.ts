/**
 * This file was generated from Treemap.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface TreemapContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    nameAttribute: ListAttributeValue<string>;
    valueAttribute: ListAttributeValue<Big>;
    colorAttribute?: ListAttributeValue<string>;
    height: number;
    strokeWidth: number;
    textColor: string;
    strokeColor: string;
    withTooltip: boolean;
    autoContrast: boolean;
}

export interface TreemapPreviewProps {
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
    datasource: {} | { caption: string } | { type: string } | null;
    nameAttribute: string;
    valueAttribute: string;
    colorAttribute: string;
    height: number | null;
    strokeWidth: number | null;
    textColor: string;
    strokeColor: string;
    withTooltip: boolean;
    autoContrast: boolean;
}
