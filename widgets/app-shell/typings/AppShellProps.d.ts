/**
 * This file was generated from AppShell.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export interface AppShellContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    children?: ReactNode;
    navbar?: ReactNode;
    header?: ReactNode;
}

export interface AppShellPreviewProps {
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
    navbar: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    header: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
