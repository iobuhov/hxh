import { ReactElement, createElement } from "react";
import { Grid as MantineGrid } from "../../mantine/mantine.main.mjs";
import { GridContainerProps, JustifyEnum } from "../typings/GridProps";

const JUSTIFY_MAP: Record<JustifyEnum, string> = {
    flexStart: "flex-start",
    center: "center",
    flexEnd: "flex-end",
    spaceBetween: "space-between",
    spaceAround: "space-around"
};

export function Grid(props: GridContainerProps): ReactElement {
    return (
        <MantineGrid
            className={props.class || undefined}
            columns={props.columns}
            gap={props.gap || undefined}
            grow={props.grow}
            align={props.align}
            justify={JUSTIFY_MAP[props.justify]}
        >
            {props.children}
        </MantineGrid>
    );
}
