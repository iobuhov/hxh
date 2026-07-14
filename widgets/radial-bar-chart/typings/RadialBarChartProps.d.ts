/**
 * This file was generated from RadialBarChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface RadialBarChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    nameAttribute: ListAttributeValue<string>;
    valueAttribute: ListAttributeValue<Big>;
    colorAttribute: ListAttributeValue<string>;
    height: number;
    barSize: number;
    startAngle: number;
    endAngle: number;
    emptyBackgroundColor: string;
    withBackground: boolean;
    withLabels: boolean;
    withTooltip: boolean;
    withLegend: boolean;
}

export interface RadialBarChartPreviewProps {
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
    barSize: number | null;
    startAngle: number | null;
    endAngle: number | null;
    emptyBackgroundColor: string;
    withBackground: boolean;
    withLabels: boolean;
    withTooltip: boolean;
    withLegend: boolean;
}
