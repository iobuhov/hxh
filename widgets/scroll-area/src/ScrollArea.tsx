import { ReactElement, createElement } from "react";
import { ScrollArea as MantineScrollArea } from "../../mantine/mantine.main.mjs";
import { ScrollAreaContainerProps } from "../typings/ScrollAreaProps";

export function ScrollArea(props: ScrollAreaContainerProps): ReactElement {
    return (
        <MantineScrollArea
            className={`mantine-ScrollArea-root${props.class ? ` ${props.class}` : ""}`}
            h={props.h || undefined}
            type={props.type}
            scrollbars={props.scrollbars === "xy" ? undefined : props.scrollbars}
            offsetScrollbars={props.offsetScrollbars || undefined}
        >
            {props.children}
        </MantineScrollArea>
    );
}
