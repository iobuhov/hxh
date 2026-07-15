/**
 * This file was generated from SegmentedControl.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue, ListExpressionValue } from "mendix";

export type DataSourceTypeEnum = "static" | "datasource";

export interface StaticItemsType {
    itemValue: string;
    itemLabel: string;
    itemDisabled: boolean;
}

export type OrientationEnum = "horizontal" | "vertical";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type RadiusEnum = "xs" | "sm" | "md" | "lg" | "xl";

export interface StaticItemsPreviewType {
    itemValue: string;
    itemLabel: string;
    itemDisabled: boolean;
}

export interface SegmentedControlContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<string>;
    dataSourceType: DataSourceTypeEnum;
    staticItems: StaticItemsType[];
    optionsSource?: ListValue;
    optionValue?: ListAttributeValue<string>;
    optionLabel?: ListExpressionValue<string>;
    disabled: boolean;
    readOnly: boolean;
    orientation: OrientationEnum;
    fullWidth: boolean;
    withItemsBorders: boolean;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
    transitionDuration: string;
    onChange?: ActionValue;
}

export interface SegmentedControlPreviewProps {
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
    dataSourceType: DataSourceTypeEnum;
    staticItems: StaticItemsPreviewType[];
    optionsSource: {} | { caption: string } | { type: string } | null;
    optionValue: string;
    optionLabel: string;
    disabled: boolean;
    readOnly: boolean;
    orientation: OrientationEnum;
    fullWidth: boolean;
    withItemsBorders: boolean;
    color: string;
    size: SizeEnum;
    radius: RadiusEnum;
    transitionDuration: string;
    onChange: {} | null;
}
