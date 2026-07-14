/**
 * This file was generated from PinInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type TypeEnum = "alphanumeric" | "number";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface PinInputContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<string>;
    length: number;
    type: TypeEnum;
    mask: boolean;
    placeholder: string;
    oneTimeCode: boolean;
    disabled: boolean;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange?: ActionValue;
    onComplete?: ActionValue;
}

export interface PinInputPreviewProps {
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
    length: number | null;
    type: TypeEnum;
    mask: boolean;
    placeholder: string;
    oneTimeCode: boolean;
    disabled: boolean;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange: {} | null;
    onComplete: {} | null;
}
