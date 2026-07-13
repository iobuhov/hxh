/**
 * This file was generated from NavLink.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue } from "mendix";

export type ComponentTypeEnum = "anchor" | "button";

export type ModeEnum = "link" | "collapse";

export type VariantEnum = "filled" | "light" | "subtle";

export interface NavLinkContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    label: string;
    description: string;
    disabled: boolean;
    href: string;
    componentType: ComponentTypeEnum;
    mode: ModeEnum;
    onClick?: ActionValue;
    children?: ReactNode;
    defaultOpened: boolean;
    icon: string;
    iconSize: number;
    iconStrokeWidth: string;
    variant: VariantEnum;
    color: string;
    noWrap: boolean;
    autoContrast: boolean;
}

export interface NavLinkPreviewProps {
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
    label: string;
    description: string;
    disabled: boolean;
    href: string;
    componentType: ComponentTypeEnum;
    mode: ModeEnum;
    onClick: {} | null;
    children: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    defaultOpened: boolean;
    icon: string;
    iconSize: number | null;
    iconStrokeWidth: string;
    variant: VariantEnum;
    color: string;
    noWrap: boolean;
    autoContrast: boolean;
}
