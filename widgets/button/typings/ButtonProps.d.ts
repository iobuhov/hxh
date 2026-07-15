/**
 * This file was generated from Button.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export interface ButtonContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    autoContrast: boolean;
    children: string;
    color: string;
    disabled: boolean;
    fullWidth: boolean;
    gradient: string;
    justify: string;
    leftSection: string;
    loaderProps: string;
    loading: boolean;
    radius: string;
    rightSection: string;
    size: string;
}

export interface ButtonPreviewProps {
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
    fullWidth: boolean;
    gradient: string;
    justify: string;
    leftSection: string;
    loaderProps: string;
    loading: boolean;
    radius: string;
    rightSection: string;
    size: string;
}
