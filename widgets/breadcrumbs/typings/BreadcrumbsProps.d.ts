/**
 * This file was generated from Breadcrumbs.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, ListActionValue, ListExpressionValue, ListValue, ObjectItem } from "mendix";

export interface BreadcrumbsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    label: ListExpressionValue<string>;
    action?: ListActionValue;
    separator?: DynamicValue<string>;
}

export interface BreadcrumbsPreviewProps {
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
    label: string;
    action: {} | null;
    separator: string;
}
