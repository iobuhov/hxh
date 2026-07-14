/**
 * This file was generated from RangeSlider.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface RangeSliderContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    fromValue: EditableValue<Big>;
    toValue: EditableValue<Big>;
    disabled: boolean;
    min: number;
    max: number;
    step: number;
    minRange: number;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange?: ActionValue;
    onChangeEnd?: ActionValue;
}

export interface RangeSliderPreviewProps {
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
    fromValue: string;
    toValue: string;
    disabled: boolean;
    min: number | null;
    max: number | null;
    step: number | null;
    minRange: number | null;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange: {} | null;
    onChangeEnd: {} | null;
}
