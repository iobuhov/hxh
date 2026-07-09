/**
 * This file was generated from Text.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type SlotEnum = "none" | "label";

export interface TextContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    text?: DynamicValue<string>;
    size: string;
    color: string;
    fw: string;
    slot: SlotEnum;
}

export interface TextPreviewProps {
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
    text: string;
    size: string;
    color: string;
    fw: string;
    slot: SlotEnum;
}
