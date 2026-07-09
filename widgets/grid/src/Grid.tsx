import { ReactElement, createElement } from "react";
import { Grid as MantineGrid } from "../../mantine/mantine.main.mjs";
import { GridContainerProps } from "../typings/GridProps";

export function Grid(props: GridContainerProps): ReactElement {
    return (
        <MantineGrid
            className={props.class || undefined}
            columns={props.columns}
            gutter={props.gutter || "md"}
            grow={props.grow}
            align={props.align}
            justify={props.justify}
        >
            {props.children}
        </MantineGrid>
    );
}
