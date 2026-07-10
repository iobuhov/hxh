/**
 * This file was generated from TabsList.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type IconPositionEnum = "none" | "left" | "right";

export interface TabsType {
    tabValue: string;
    label: string;
    iconPosition: IconPositionEnum;
    icon?: ReactNode;
}

export type JustifyEnum = "flexStart" | "center" | "flexEnd" | "spaceBetween";

export interface TabsPreviewType {
    tabValue: string;
    label: string;
    iconPosition: IconPositionEnum;
    icon: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}

export interface TabsListContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    tabs: TabsType[];
    grow: boolean;
    justify: JustifyEnum;
}

export interface TabsListPreviewProps {
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
    tabs: TabsPreviewType[];
    grow: boolean;
    justify: JustifyEnum;
}
