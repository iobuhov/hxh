/**
 * This file was generated from ScrollArea.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type TypeEnum = "hover" | "scroll" | "auto" | "always" | "never";

export type ScrollbarsEnum = "xy" | "x" | "y";

export interface ScrollAreaContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    children?: ReactNode;
    h: string;
    type: TypeEnum;
    scrollbars: ScrollbarsEnum;
    offsetScrollbars: boolean;
}

export interface ScrollAreaPreviewProps {
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
    children: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    h: string;
    type: TypeEnum;
    scrollbars: ScrollbarsEnum;
    offsetScrollbars: boolean;
}
