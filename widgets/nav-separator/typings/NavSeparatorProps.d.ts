/**
 * This file was generated from NavSeparator.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export type OrientationEnum = "horizontal" | "vertical";

export type VariantEnum = "solid" | "dashed" | "dotted";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type LabelPositionEnum = "left" | "center" | "right";

export interface NavSeparatorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    label: string;
    orientation: OrientationEnum;
    variant: VariantEnum;
    size: SizeEnum;
    labelPosition: LabelPositionEnum;
    color: string;
}

export interface NavSeparatorPreviewProps {
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
    orientation: OrientationEnum;
    variant: VariantEnum;
    size: SizeEnum;
    labelPosition: LabelPositionEnum;
    color: string;
}
