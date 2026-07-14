/**
 * This file was generated from Switch.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type LabelPositionEnum = "left" | "right";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface SwitchContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<boolean>;
    label: string;
    description: string;
    onLabel: string;
    offLabel: string;
    disabled: boolean;
    labelPosition: LabelPositionEnum;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange?: ActionValue;
}

export interface SwitchPreviewProps {
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
    onLabel: string;
    offLabel: string;
    disabled: boolean;
    labelPosition: LabelPositionEnum;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
    onChange: {} | null;
}
