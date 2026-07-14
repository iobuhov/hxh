/**
 * This file was generated from Sparkline.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export type CurveTypeEnum = "bump" | "linear" | "natural" | "monotone" | "step" | "stepBefore" | "stepAfter";

export interface SparklineContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    valueAttribute: ListAttributeValue<Big>;
    color: string;
    curveType: CurveTypeEnum;
    strokeWidth: Big;
    fillOpacity: Big;
    withGradient: boolean;
    connectNulls: boolean;
    height: number;
}

export interface SparklinePreviewProps {
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
    valueAttribute: string;
    color: string;
    curveType: CurveTypeEnum;
    strokeWidth: number | null;
    fillOpacity: number | null;
    withGradient: boolean;
    connectNulls: boolean;
    height: number | null;
}
