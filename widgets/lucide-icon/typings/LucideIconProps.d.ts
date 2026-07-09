/**
 * This file was generated from LucideIcon.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export interface LucideIconContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    icon: string;
    size: number;
    color: string;
    strokeWidth: string;
    themeIcon: boolean;
    themeIconVariant: string;
    themeIconColor: string;
    themeIconSize: string;
}

export interface LucideIconPreviewProps {
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
    icon: string;
    size: number | null;
    color: string;
    strokeWidth: string;
    themeIcon: boolean;
    themeIconVariant: string;
    themeIconColor: string;
    themeIconSize: string;
}
