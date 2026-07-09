import { ReactElement, createElement } from "react";
import { Grid } from "../../mantine/mantine.main.mjs";
import { GridColContainerProps } from "../typings/GridColProps";

export function GridCol(props: GridColContainerProps): ReactElement {
    return (
        <Grid.Col
            className={props.class || undefined}
            span={props.span > 0 ? props.span : "auto"}
            offset={props.offset > 0 ? props.offset : undefined}
            order={props.order !== 0 ? props.order : undefined}
        >
            {props.children}
        </Grid.Col>
    );
}
