import { ReactElement, createElement } from "react";
import { SimpleGrid as MantineSimpleGrid } from "../../mantine/mantine.main.mjs";
import { SimpleGridContainerProps } from "../typings/SimpleGridProps";

export function SimpleGrid(props: SimpleGridContainerProps): ReactElement {
    return (
        <MantineSimpleGrid cols={props.cols || 1} spacing={props.spacing || "md"}>
            {props.children}
        </MantineSimpleGrid>
    );
}
