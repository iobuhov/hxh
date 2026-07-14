/**
 * This file was generated from DonutChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export type LabelsTypeEnum = "value" | "percent" | "name";

export type TooltipDataSourceEnum = "all" | "segment";

export interface DonutChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    nameAttribute: ListAttributeValue<string>;
    valueAttribute: ListAttributeValue<Big>;
    colorAttribute: ListAttributeValue<string>;
    size: number;
    thickness: number;
    strokeWidth: number;
    paddingAngle: number;
    startAngle: number;
    endAngle: number;
    chartLabel: string;
    labelsType: LabelsTypeEnum;
    tooltipDataSource: TooltipDataSourceEnum;
    withLabels: boolean;
    withLabelsLine: boolean;
    withTooltip: boolean;
    withLegend: boolean;
}

export interface DonutChartPreviewProps {
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
    size: number | null;
    thickness: number | null;
    strokeWidth: number | null;
    paddingAngle: number | null;
    startAngle: number | null;
    endAngle: number | null;
    chartLabel: string;
    labelsType: LabelsTypeEnum;
    tooltipDataSource: TooltipDataSourceEnum;
    withLabels: boolean;
    withLabelsLine: boolean;
    withTooltip: boolean;
    withLegend: boolean;
}
