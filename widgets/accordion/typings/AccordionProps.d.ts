/**
 * This file was generated from Accordion.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, WebIcon } from "mendix";

export type ChevronPositionEnum = "left" | "right";

export type OrderEnum = "2" | "3" | "4" | "5" | "6";

export interface AccordionContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    chevron?: DynamicValue<WebIcon>;
    chevronIconSize: string;
    chevronPosition?: ChevronPositionEnum;
    chevronSize: string;
    defaultValue?: EditableValue<string>;
    disableChevronRotation?: boolean;
    loop?: boolean;
    multiple?: boolean;
    onChange?: ActionValue;
    order?: OrderEnum;
    radius: string;
    transitionDuration?: number;
    value?: EditableValue<string>;
}

export interface AccordionPreviewProps {
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
    chevron: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    chevronIconSize: string;
    chevronPosition: ChevronPositionEnum;
    chevronSize: string;
    defaultValue: string;
    disableChevronRotation: boolean;
    loop: boolean;
    multiple: boolean;
    onChange: {} | null;
    order: OrderEnum;
    radius: string;
    transitionDuration: number | null;
    value: string;
}
