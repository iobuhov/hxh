/**
 * This file was generated from RingProgress.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface RingProgressContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    value: EditableValue<Big>;
    label: string;
    roundCaps: boolean;
    color: string;
    size: number;
    thickness: number;
}

export interface RingProgressPreviewProps {
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
    roundCaps: boolean;
    color: string;
    size: number | null;
    thickness: number | null;
}
