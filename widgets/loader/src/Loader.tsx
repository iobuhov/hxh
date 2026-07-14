import { ReactElement, createElement } from "react";
import { Loader as MantineLoader } from "../../mantine/mantine.main.mjs";
import { LoaderContainerProps } from "../typings/LoaderProps";

export function Loader(props: LoaderContainerProps): ReactElement {
    return (
        <MantineLoader
            className={props.class}
            style={props.style}
            tabIndex={props.tabIndex}
            size={props.size}
            color={props.color}
            type={props.type}
        />
    );
}
