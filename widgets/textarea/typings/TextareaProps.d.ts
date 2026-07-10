/**
 * This file was generated from Textarea.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type ResizeEnum = "none" | "vertical" | "horizontal" | "both";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface TextareaContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<string>;
    label: string;
    description: string;
    placeholder: string;
    required: boolean;
    disabled: boolean;
    autosize: boolean;
    minRows: number;
    maxRows: number;
    resize: ResizeEnum;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange?: ActionValue;
}

export interface TextareaPreviewProps {
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
    required: boolean;
    disabled: boolean;
    autosize: boolean;
    minRows: number | null;
    maxRows: number | null;
    resize: ResizeEnum;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange: {} | null;
}
