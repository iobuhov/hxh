/**
 * This file was generated from Table.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ListValue, ListWidgetValue } from "mendix";

export type TextAlignEnum = "left" | "center" | "right";

export interface ColumnsType {
    header: string;
    content?: ListWidgetValue;
    textAlign: TextAlignEnum;
    width: string;
}

export interface ColumnsPreviewType {
    header: string;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    textAlign: TextAlignEnum;
    width: string;
}

export interface TableContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    columns: ColumnsType[];
    withTableBorder: boolean;
    withColumnBorders: boolean;
    withRowBorders: boolean;
    striped: boolean;
    highlightOnHover: boolean;
    stickyHeader: boolean;
    horizontalSpacing: string;
    verticalSpacing: string;
}

export interface TablePreviewProps {
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
    columns: ColumnsPreviewType[];
    withTableBorder: boolean;
    withColumnBorders: boolean;
    withRowBorders: boolean;
    striped: boolean;
    highlightOnHover: boolean;
    stickyHeader: boolean;
    horizontalSpacing: string;
    verticalSpacing: string;
}
