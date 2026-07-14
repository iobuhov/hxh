/**
 * This file was generated from LineChart.xml
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

export type TypeEnum = "default" | "gradient";

export type CurveTypeEnum = "bump" | "linear" | "natural" | "monotone" | "step" | "stepBefore" | "stepAfter";

export type OrientationEnum = "horizontal" | "vertical";

export type GridAxisEnum = "x" | "y" | "xy" | "none";

export type TickLineEnum = "x" | "y" | "xy" | "none";

export interface SeriesPreviewType {
    valueAttribute: string;
    name: string;
    color: string;
}

export interface LineChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    categoryAttribute: ListAttributeValue<string | Date | Big>;
    series: SeriesType[];
    type: TypeEnum;
    curveType: CurveTypeEnum;
    orientation: OrientationEnum;
    gridAxis: GridAxisEnum;
    tickLine: TickLineEnum;
    height: number;
    unit: string;
    strokeWidth: Big;
    fillOpacity: Big;
    withDots: boolean;
    connectNulls: boolean;
    withPointLabels: boolean;
    withLegend: boolean;
    withTooltip: boolean;
    withXAxis: boolean;
    withYAxis: boolean;
}

export interface LineChartPreviewProps {
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
    curveType: CurveTypeEnum;
    orientation: OrientationEnum;
    gridAxis: GridAxisEnum;
    tickLine: TickLineEnum;
    height: number | null;
    unit: string;
    strokeWidth: number | null;
    fillOpacity: number | null;
    withDots: boolean;
    connectNulls: boolean;
    withPointLabels: boolean;
    withLegend: boolean;
    withTooltip: boolean;
    withXAxis: boolean;
    withYAxis: boolean;
}
