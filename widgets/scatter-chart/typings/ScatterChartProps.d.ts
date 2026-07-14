/**
 * This file was generated from ScatterChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface ScatterChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    xAttribute: ListAttributeValue<Big>;
    yAttribute: ListAttributeValue<Big>;
    seriesName: string;
    color: string;
    xAxisLabel: string;
    yAxisLabel: string;
    unitX: string;
    unitY: string;
    height: number;
    withLegend: boolean;
    withTooltip: boolean;
    withXAxis: boolean;
    withYAxis: boolean;
}

export interface ScatterChartPreviewProps {
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
    xAttribute: string;
    yAttribute: string;
    seriesName: string;
    color: string;
    xAxisLabel: string;
    yAxisLabel: string;
    unitX: string;
    unitY: string;
    height: number | null;
    withLegend: boolean;
    withTooltip: boolean;
    withXAxis: boolean;
    withYAxis: boolean;
}
