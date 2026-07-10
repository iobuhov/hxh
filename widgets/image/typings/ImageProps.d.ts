/**
 * This file was generated from Image.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type FitEnum = "cover" | "contain" | "fill" | "none" | "scaleDown";

export interface ImageContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    src?: DynamicValue<string>;
    alt: string;
    fallbackSrc?: DynamicValue<string>;
    fit: FitEnum;
    radius: string;
    width: string;
    height: string;
}

export interface ImagePreviewProps {
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
    src: string;
    alt: string;
    fallbackSrc: string;
    fit: FitEnum;
    radius: string;
    width: string;
    height: string;
}
