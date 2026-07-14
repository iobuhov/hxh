/**
 * This file was generated from BarChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface SeriesType {
    valueAttribute: ListAttributeValue<Big>;
    name: string;
    color: string;
}

export type TypeEnum = "default" | "stacked" | "percent" | "waterfall";

export type OrientationEnum = "horizontal" | "vertical";

export type GridAxisEnum = "x" | "y" | "xy" | "none";

export type TickLineEnum = "x" | "y" | "xy" | "none";

export interface SeriesPreviewType {
    valueAttribute: string;
    name: string;
    color: string;
}

export interface BarChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    categoryAttribute: ListAttributeValue<string | Date | Big>;
    series: SeriesType[];
    type: TypeEnum;
    orientation: OrientationEnum;
    gridAxis: GridAxisEnum;
    tickLine: TickLineEnum;
    height: number;
    unit: string;
    fillOpacity: Big;
    withBarValueLabel: boolean;
    withLegend: boolean;
    withTooltip: boolean;
    withXAxis: boolean;
    withYAxis: boolean;
}

export interface BarChartPreviewProps {
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
    categoryAttribute: string;
    series: SeriesPreviewType[];
    type: TypeEnum;
    orientation: OrientationEnum;
    gridAxis: GridAxisEnum;
    tickLine: TickLineEnum;
    height: number | null;
    unit: string;
    fillOpacity: number | null;
    withBarValueLabel: boolean;
    withLegend: boolean;
    withTooltip: boolean;
    withXAxis: boolean;
    withYAxis: boolean;
}
