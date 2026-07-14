/**
 * This file was generated from CompositeChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export type SeriesTypeEnum = "bar" | "line" | "area";

export interface SeriesType {
    valueAttribute: ListAttributeValue<Big>;
    name: string;
    color: string;
    seriesType: SeriesTypeEnum;
}

export type CurveTypeEnum = "bump" | "linear" | "natural" | "monotone" | "step" | "stepBefore" | "stepAfter";

export type GridAxisEnum = "x" | "y" | "xy" | "none";

export type TickLineEnum = "x" | "y" | "xy" | "none";

export interface SeriesPreviewType {
    valueAttribute: string;
    name: string;
    color: string;
    seriesType: SeriesTypeEnum;
}

export interface CompositeChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    categoryAttribute: ListAttributeValue<string | Date | Big>;
    series: SeriesType[];
    curveType: CurveTypeEnum;
    gridAxis: GridAxisEnum;
    tickLine: TickLineEnum;
    height: number;
    unit: string;
    strokeWidth: Big;
    withDots: boolean;
    connectNulls: boolean;
    withPointLabels: boolean;
    withBarValueLabel: boolean;
    withLegend: boolean;
    withTooltip: boolean;
    withXAxis: boolean;
    withYAxis: boolean;
}

export interface CompositeChartPreviewProps {
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
    curveType: CurveTypeEnum;
    gridAxis: GridAxisEnum;
    tickLine: TickLineEnum;
    height: number | null;
    unit: string;
    strokeWidth: number | null;
    withDots: boolean;
    connectNulls: boolean;
    withPointLabels: boolean;
    withBarValueLabel: boolean;
    withLegend: boolean;
    withTooltip: boolean;
    withXAxis: boolean;
    withYAxis: boolean;
}
