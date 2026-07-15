/**
 * This file was generated from JsonInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface JsonInputContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<string>;
    label: string;
    description: string;
    placeholder: string;
    formatOnBlur: boolean;
    autosize: boolean;
    minRows: string;
    maxRows: string;
    validationError: string;
    required: boolean;
    disabled: boolean;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange?: ActionValue;
}

export interface JsonInputPreviewProps {
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
    label: string;
    description: string;
    placeholder: string;
    formatOnBlur: boolean;
    autosize: boolean;
    minRows: string;
    maxRows: string;
    validationError: string;
    required: boolean;
    disabled: boolean;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange: {} | null;
}
