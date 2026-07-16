import { ReactElement, createElement } from "react";
import { Card as MantineCard } from "../../mantine/mantine.main.mjs";
import { CardContainerProps } from "../typings/CardProps";

export function Card(props: CardContainerProps): ReactElement {
    return (
        <MantineCard
            className={props.class}
            style={props.style}
            withBorder={props.withBorder}
            shadow={props.shadow || "sm"}
            padding={props.padding || "md"}
        >
            {props.children}
        </MantineCard>
    );
}
