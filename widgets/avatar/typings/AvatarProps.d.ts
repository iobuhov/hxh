/**
 * This file was generated from Avatar.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface AvatarContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    src?: DynamicValue<string>;
    userName: string;
    size: string;
    radius: string;
    color: string;
}

export interface AvatarPreviewProps {
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
    src: string;
    userName: string;
    size: string;
    radius: string;
    color: string;
}
