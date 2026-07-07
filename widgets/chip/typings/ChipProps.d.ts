/**
 * This file was generated from Chip.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, WebIcon } from "mendix";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type TypeEnum = "checkbox" | "radio";

export interface ChipContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    autoContrast?: boolean;
    checked?: boolean;
    children: string;
    color: string;
    defaultChecked?: boolean;
    icon?: DynamicValue<WebIcon>;
    id: string;
    onChange?: ActionValue;
    radius: string;
    rootRef: string;
    size?: SizeEnum;
    type?: TypeEnum;
    wrapperProps: string;
}

export interface ChipPreviewProps {
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
    checked: boolean;
    children: string;
    color: string;
    defaultChecked: boolean;
    icon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    id: string;
    onChange: {} | null;
    radius: string;
    rootRef: string;
    size: SizeEnum;
    type: TypeEnum;
    wrapperProps: string;
}
