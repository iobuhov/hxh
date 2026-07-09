/**
 * This file was generated from Grid.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type AlignEnum = "stretch" | "start" | "center" | "end";

export type JustifyEnum = "flexStart" | "center" | "flexEnd" | "spaceBetween" | "spaceAround";

export interface GridContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    children?: ReactNode;
    columns: number;
    grow: boolean;
    align: AlignEnum;
    justify: JustifyEnum;
}

export interface GridPreviewProps {
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
    children: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    columns: number | null;
    grow: boolean;
    align: AlignEnum;
    justify: JustifyEnum;
}
