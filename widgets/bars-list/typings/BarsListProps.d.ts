/**
 * This file was generated from BarsList.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface BarsListContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    nameAttribute: ListAttributeValue<string>;
    valueAttribute: ListAttributeValue<Big>;
    colorAttribute?: ListAttributeValue<string>;
    barsLabel: string;
    valueLabel: string;
    barColor: string;
    barTextColor: string;
    barHeight: number;
    minBarSize: number;
    autoContrast: boolean;
}

export interface BarsListPreviewProps {
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
    barsLabel: string;
    valueLabel: string;
    barColor: string;
    barTextColor: string;
    barHeight: number | null;
    minBarSize: number | null;
    autoContrast: boolean;
}
