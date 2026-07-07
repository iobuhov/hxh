/**
 * This file was generated from Alert.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, WebIcon } from "mendix";

export interface AlertContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    autoContrast?: boolean;
    closeButtonLabel: string;
    color: string;
    icon?: DynamicValue<WebIcon>;
    onClose?: ActionValue;
    radius: string;
    title: string;
    withCloseButton?: boolean;
}

export interface AlertPreviewProps {
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
    closeButtonLabel: string;
    color: string;
    icon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    onClose: {} | null;
    radius: string;
    title: string;
    withCloseButton: boolean;
}
