import { ReactElement, createElement } from "react";
import { Stack as MantineStack } from "../../mantine/mantine.main.mjs";
import { StackContainerProps } from "../typings/StackProps";

export function Stack(props: StackContainerProps): ReactElement {
    return <MantineStack gap={props.gap || "md"}>{props.children}</MantineStack>;
}
