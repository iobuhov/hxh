import { ReactElement, createElement } from "react";
import { Grid } from "../../mantine/mantine.main.mjs";
import { GridColContainerProps } from "../typings/GridColProps";

function parseSpan(value: string): number | "auto" | "content" {
    if (value === "auto" || value === "content") {
        return value;
    }
    const num = Number(value);
    return Number.isFinite(num) && num > 0 ? num : "auto";
}

export function GridCol(props: GridColContainerProps): ReactElement {
    return (
        <Grid.Col
            className={props.class || undefined}
            span={parseSpan(props.span)}
            offset={props.offset > 0 ? props.offset : undefined}
            order={props.order !== 0 ? props.order : undefined}
        >
            {props.children}
        </Grid.Col>
    );
}
