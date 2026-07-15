/**
 * This file was generated from Combobox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export type FloatingStrategyEnum = "absolute" | "fixed";

export type PositionEnum = "top" | "bottom" | "left" | "right" | "topStart" | "topEnd" | "bottomStart" | "bottomEnd" | "leftStart" | "leftEnd" | "rightStart" | "rightEnd";

export type SizeEnum = "xs" | "sm" | "md" | "lg" | "xl";

export type WidthEnum = "target" | "maxContent" | "minContent";

export interface ComboboxContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    arrowOffset: number;
    arrowPosition: string;
    arrowRadius: number;
    arrowSize: number;
    children: string;
    disabled: boolean;
    dropdownPadding: string;
    floatingStrategy: FloatingStrategyEnum;
    hideDetached: boolean;
    keepMounted: boolean;
    middlewares: string;
    offset: string;
    onClose?: ActionValue;
    onDismiss?: ActionValue;
    onEnterTransitionEnd?: ActionValue;
    onExitTransitionEnd?: ActionValue;
    onOpen?: ActionValue;
    onOptionSubmit?: ActionValue;
    onPositionChange?: ActionValue;
    overlayProps: string;
    portalProps: string;
    position: PositionEnum;
    positionDependencies: string;
    preventPositionChangeWhenVisible: boolean;
    radius: string;
    readOnly: boolean;
    resetSelectionOnOptionHover: boolean;
    returnFocus: boolean;
    shadow: string;
    size: SizeEnum;
    store: string;
    transitionProps: string;
    width: WidthEnum;
    withArrow: boolean;
    withOverlay: boolean;
    withinPortal: boolean;
    zIndex: string;
}

export interface ComboboxPreviewProps {
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
    arrowOffset: number | null;
    arrowPosition: string;
    arrowRadius: number | null;
    arrowSize: number | null;
    children: string;
    disabled: boolean;
    dropdownPadding: string;
    floatingStrategy: FloatingStrategyEnum;
    hideDetached: boolean;
    keepMounted: boolean;
    middlewares: string;
    offset: string;
    onClose: {} | null;
    onDismiss: {} | null;
    onEnterTransitionEnd: {} | null;
    onExitTransitionEnd: {} | null;
    onOpen: {} | null;
    onOptionSubmit: {} | null;
    onPositionChange: {} | null;
    overlayProps: string;
    portalProps: string;
    position: PositionEnum;
    positionDependencies: string;
    preventPositionChangeWhenVisible: boolean;
    radius: string;
    readOnly: boolean;
    resetSelectionOnOptionHover: boolean;
    returnFocus: boolean;
    shadow: string;
    size: SizeEnum;
    store: string;
    transitionProps: string;
    width: WidthEnum;
    withArrow: boolean;
    withOverlay: boolean;
    withinPortal: boolean;
    zIndex: string;
}
