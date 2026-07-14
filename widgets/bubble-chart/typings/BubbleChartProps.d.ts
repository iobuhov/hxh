/**
 * This file was generated from BubbleChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface BubbleChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    xAttribute: ListAttributeValue<string | Date | Big>;
    yAttribute: ListAttributeValue<Big>;
    zAttribute: ListAttributeValue<Big>;
    color: string;
    label: string;
    rangeMin: number;
    rangeMax: number;
    height: number;
    withTooltip: boolean;
}

export interface BubbleChartPreviewProps {
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
    zAttribute: string;
    color: string;
    label: string;
    rangeMin: number | null;
    rangeMax: number | null;
    height: number | null;
    withTooltip: boolean;
}
