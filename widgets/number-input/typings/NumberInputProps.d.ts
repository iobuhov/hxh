/**
 * This file was generated from NumberInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type ClampBehaviorEnum = "none" | "blur" | "strict";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface NumberInputContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<Big>;
    label: string;
    description: string;
    placeholder: string;
    required: boolean;
    disabled: boolean;
    min?: DynamicValue<Big>;
    max?: DynamicValue<Big>;
    step: number;
    clampBehavior: ClampBehaviorEnum;
    allowDecimal: boolean;
    decimalScale?: DynamicValue<Big>;
    fixedDecimalScale: boolean;
    allowNegative: boolean;
    thousandSeparator: boolean;
    prefix: string;
    suffix: string;
    hideControls: boolean;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange?: ActionValue;
}

export interface NumberInputPreviewProps {
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
    min: string;
    max: string;
    step: number | null;
    clampBehavior: ClampBehaviorEnum;
    allowDecimal: boolean;
    decimalScale: string;
    fixedDecimalScale: boolean;
    allowNegative: boolean;
    thousandSeparator: boolean;
    prefix: string;
    suffix: string;
    hideControls: boolean;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange: {} | null;
}
