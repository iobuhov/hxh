/**
 * This file was generated from ThemeIcon.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type VariantEnum = "filled" | "light" | "outline" | "default" | "gradient" | "transparent";

export interface ThemeIconContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    content?: ReactNode;
    variant: VariantEnum;
    color: string;
    size: string;
    radius: string;
}

export interface ThemeIconPreviewProps {
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
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    variant: VariantEnum;
    color: string;
    size: string;
    radius: string;
}
