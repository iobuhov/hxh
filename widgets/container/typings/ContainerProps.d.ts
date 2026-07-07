/**
 * This file was generated from Container.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export type StrategyEnum = "block" | "grid";

export interface ContainerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    fluid?: boolean;
    size: string;
    strategy?: StrategyEnum;
}

export interface ContainerPreviewProps {
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
    fluid: boolean;
    size: string;
    strategy: StrategyEnum;
}
