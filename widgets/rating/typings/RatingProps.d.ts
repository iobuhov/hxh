/**
 * This file was generated from Rating.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface RatingContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<Big>;
    count: number;
    fractions: number;
    readOnly: boolean;
    color: string;
    size: SizeEnum;
    onChange?: ActionValue;
}

export interface RatingPreviewProps {
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
    value: string;
    count: number | null;
    fractions: number | null;
    readOnly: boolean;
    color: string;
    size: SizeEnum;
    onChange: {} | null;
}
