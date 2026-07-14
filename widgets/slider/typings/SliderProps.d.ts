/**
 * This file was generated from Slider.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface SliderContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<Big>;
    disabled: boolean;
    min: number;
    max: number;
    step: number;
    inverted: boolean;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange?: ActionValue;
    onChangeEnd?: ActionValue;
}

export interface SliderPreviewProps {
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
    disabled: boolean;
    min: number | null;
    max: number | null;
    step: number | null;
    inverted: boolean;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange: {} | null;
    onChangeEnd: {} | null;
}
