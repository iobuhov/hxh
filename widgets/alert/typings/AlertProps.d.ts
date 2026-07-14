/**
 * This file was generated from Alert.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export type ColorEnum = "gray" | "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";

export type VariantEnum = "default" | "light" | "filled" | "outline";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface AlertContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    title: string;
    message: string;
    color: ColorEnum;
    variant: VariantEnum;
    radius: RadiusEnum;
    withCloseButton: boolean;
    onClose?: ActionValue;
}

export interface AlertPreviewProps {
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
    title: string;
    message: string;
    color: ColorEnum;
    variant: VariantEnum;
    radius: RadiusEnum;
    withCloseButton: boolean;
    onClose: {} | null;
}
