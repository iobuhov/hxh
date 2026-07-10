/**
 * This file was generated from Badge.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type VariantEnum = "filled" | "light" | "outline" | "dot" | "transparent" | "default";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface BadgeContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    content?: DynamicValue<string>;
    color: string;
    fullWidth: boolean;
    circle: boolean;
    variant: VariantEnum;
    size: SizeEnum;
    radius: RadiusEnum;
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
    content: string;
    color: string;
    fullWidth: boolean;
    circle: boolean;
    variant: VariantEnum;
    size: SizeEnum;
    radius: RadiusEnum;
}
