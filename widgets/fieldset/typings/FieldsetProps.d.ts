/**
 * This file was generated from Fieldset.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type VariantEnum = "default" | "filled" | "unstyled";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface FieldsetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    content?: ReactNode;
    legend: string;
    variant: VariantEnum;
    radius: RadiusEnum;
    disabled: boolean;
}

export interface FieldsetPreviewProps {
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
    legend: string;
    variant: VariantEnum;
    radius: RadiusEnum;
    disabled: boolean;
}
