/**
 * This file was generated from Radio.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue, ListExpressionValue } from "mendix";

export type OrientationEnum = "vertical" | "horizontal";

export type ColorEnum = "blue" | "gray" | "red" | "pink" | "grape" | "violet" | "indigo" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface RadioContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<string>;
    optionsSource: ListValue;
    optionValue: ListAttributeValue<string>;
    optionLabel: ListExpressionValue<string>;
    label: string;
    description: string;
    required: boolean;
    disabled: boolean;
    orientation: OrientationEnum;
    color: ColorEnum;
    size: SizeEnum;
    onChange?: ActionValue;
}

export interface RadioPreviewProps {
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
    optionsSource: {} | { caption: string } | { type: string } | null;
    optionValue: string;
    optionLabel: string;
    label: string;
    description: string;
    required: boolean;
    disabled: boolean;
    orientation: OrientationEnum;
    color: ColorEnum;
    size: SizeEnum;
    onChange: {} | null;
}
