/**
 * This file was generated from SankeyChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface SankeyChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    sourceAttribute: ListAttributeValue<string>;
    targetAttribute: ListAttributeValue<string>;
    valueAttribute: ListAttributeValue<Big>;
    height: number;
    nodeWidth: number;
    nodePadding: number;
    iterations: number;
    linkOpacity: Big;
    linkCurvature: Big;
    nodeColor: string;
    linkColor: string;
    textColor: string;
    withTooltip: boolean;
}

export interface SankeyChartPreviewProps {
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
    sourceAttribute: string;
    targetAttribute: string;
    valueAttribute: string;
    height: number | null;
    nodeWidth: number | null;
    nodePadding: number | null;
    iterations: number | null;
    linkOpacity: number | null;
    linkCurvature: number | null;
    nodeColor: string;
    linkColor: string;
    textColor: string;
    withTooltip: boolean;
}
