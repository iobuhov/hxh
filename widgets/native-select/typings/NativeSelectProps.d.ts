/**
 * This file was generated from NativeSelect.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue, ListExpressionValue } from "mendix";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface NativeSelectContainerProps {
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
    placeholder: string;
    required: boolean;
    disabled: boolean;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange?: ActionValue;
}

export interface NativeSelectPreviewProps {
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
    placeholder: string;
    required: boolean;
    disabled: boolean;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange: {} | null;
}
