/**
 * This file was generated from AngleSlider.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface AngleSliderContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    defaultValue: string;
    disabled: boolean;
    formatLabel?: ActionValue;
    hiddenInputProps: string;
    marks: string;
    inputName: string;
    onChange?: ActionValue;
    onChangeEnd?: ActionValue;
    onScrubEnd?: ActionValue;
    onScrubStart?: ActionValue;
    restrictToMarks: boolean;
    size: string;
    step: number;
    thumbSize: string;
    value: string;
    withLabel: boolean;
}

export interface AngleSliderPreviewProps {
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
    defaultValue: string;
    disabled: boolean;
    formatLabel: {} | null;
    hiddenInputProps: string;
    marks: string;
    inputName: string;
    onChange: {} | null;
    onChangeEnd: {} | null;
    onScrubEnd: {} | null;
    onScrubStart: {} | null;
    restrictToMarks: boolean;
    size: string;
    step: number | null;
    thumbSize: string;
    value: string;
    withLabel: boolean;
}
