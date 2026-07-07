/**
 * This file was generated from Checkbox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, WebIcon } from "mendix";

export type LabelPositionEnum = "left" | "right";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface CheckboxContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    autoContrast?: boolean;
    color: string;
    description: string;
    error: string;
    icon?: DynamicValue<WebIcon>;
    iconColor: string;
    id: string;
    indeterminate?: boolean;
    label: string;
    labelPosition?: LabelPositionEnum;
    radius: string;
    rootRef: string;
    size?: SizeEnum;
    wrapperProps: string;
}

export interface CheckboxPreviewProps {
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
    autoContrast: boolean;
    color: string;
    description: string;
    error: string;
    icon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    iconColor: string;
    id: string;
    indeterminate: boolean;
    label: string;
    labelPosition: LabelPositionEnum;
    radius: string;
    rootRef: string;
    size: SizeEnum;
    wrapperProps: string;
}
