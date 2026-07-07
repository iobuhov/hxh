/**
 * This file was generated from Badge.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface BadgeContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    autoContrast?: boolean;
    children: string;
    circle?: boolean;
    color: string;
    fullWidth?: boolean;
    gradient: string;
    leftSection: string;
    radius: string;
    rightSection: string;
    size?: SizeEnum;
}

export interface BadgePreviewProps {
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
    autoContrast: boolean;
    children: string;
    circle: boolean;
    color: string;
    fullWidth: boolean;
    gradient: string;
    leftSection: string;
    radius: string;
    rightSection: string;
    size: SizeEnum;
}
