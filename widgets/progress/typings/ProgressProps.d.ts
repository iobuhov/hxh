/**
 * This file was generated from Progress.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue, ListAttributeValue, ListExpressionValue } from "mendix";
import { Big } from "big.js";

export type ModeEnum = "single" | "sections";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface ProgressContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    mode: ModeEnum;
    value?: EditableValue<Big>;
    sections?: ListValue;
    sectionValue?: ListAttributeValue<Big>;
    sectionColor?: ListExpressionValue<string>;
    sectionLabel?: ListExpressionValue<string>;
    striped: boolean;
    animated: boolean;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
}

export interface ProgressPreviewProps {
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
    mode: ModeEnum;
    value: string;
    sections: {} | { caption: string } | { type: string } | null;
    sectionValue: string;
    sectionColor: string;
    sectionLabel: string;
    striped: boolean;
    animated: boolean;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
}
