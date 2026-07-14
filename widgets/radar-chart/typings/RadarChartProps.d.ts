/**
 * This file was generated from RadarChart.xml
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

export interface SeriesPreviewType {
    valueAttribute: string;
    name: string;
    color: string;
}

export interface RadarChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    categoryAttribute: ListAttributeValue<string | Date | Big>;
    series: SeriesType[];
    height: number;
    withPolarGrid: boolean;
    withPolarAngleAxis: boolean;
    withPolarRadiusAxis: boolean;
    withDots: boolean;
    withLegend: boolean;
    withTooltip: boolean;
}

export interface RadarChartPreviewProps {
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
    height: number | null;
    withPolarGrid: boolean;
    withPolarAngleAxis: boolean;
    withPolarRadiusAxis: boolean;
    withDots: boolean;
    withLegend: boolean;
    withTooltip: boolean;
}
