/**
 * This file was generated from FunnelChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export type LabelsPositionEnum = "right" | "left" | "inside";

export type TooltipDataSourceEnum = "all" | "segment";

export interface FunnelChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    nameAttribute: ListAttributeValue<string>;
    valueAttribute: ListAttributeValue<Big>;
    colorAttribute: ListAttributeValue<string>;
    size: number;
    strokeWidth: number;
    labelsPosition: LabelsPositionEnum;
    tooltipDataSource: TooltipDataSourceEnum;
    withLabels: boolean;
    withTooltip: boolean;
    withLegend: boolean;
}

export interface FunnelChartPreviewProps {
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
    strokeWidth: number | null;
    labelsPosition: LabelsPositionEnum;
    tooltipDataSource: TooltipDataSourceEnum;
    withLabels: boolean;
    withTooltip: boolean;
    withLegend: boolean;
}
