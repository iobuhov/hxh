/**
 * This file was generated from Tabs.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue } from "mendix";

export type VariantEnum = "default" | "outline" | "pills";

export type OrientationEnum = "horizontal" | "vertical";

export interface TabsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<string>;
    content?: ReactNode;
    variant: VariantEnum;
    orientation: OrientationEnum;
    color: string;
    radius: string;
    onTabChange?: ActionValue;
}

export interface TabsPreviewProps {
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
    value: string;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    variant: VariantEnum;
    orientation: OrientationEnum;
    color: string;
    radius: string;
    onTabChange: {} | null;
}
