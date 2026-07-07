/**
 * This file was generated from ActionIcon.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export interface ActionIconContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    autoContrast?: boolean;
    children: string;
    color: string;
    disabled?: boolean;
    gradient: string;
    loaderProps: string;
    loading?: boolean;
    radius: string;
    size: string;
}

export interface ActionIconPreviewProps {
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
    color: string;
    disabled: boolean;
    gradient: string;
    loaderProps: string;
    loading: boolean;
    radius: string;
    size: string;
}
