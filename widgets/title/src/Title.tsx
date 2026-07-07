import { ReactElement, createElement } from "react";
import { Title as MantineTitle } from "../../mantine/mantine.main.mjs";
import { TitleContainerProps } from "../typings/TitleProps";

export function Title(props: TitleContainerProps): ReactElement {
    return <MantineTitle order={props.order || 1}>{props.text || ""}</MantineTitle>;
}
