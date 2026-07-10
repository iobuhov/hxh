import { ReactElement, createElement } from "react";
import { Image as MantineImage } from "../../mantine/mantine.main.mjs";
import { ImageContainerProps } from "../typings/ImageProps";

const FIT = {
    cover: "cover",
    contain: "contain",
    fill: "fill",
    none: "none",
    scaleDown: "scale-down"
} as const;

export function Image(props: ImageContainerProps): ReactElement {
    const src = props.src?.status === "available" ? props.src.value : undefined;
    const fallbackSrc = props.fallbackSrc?.status === "available" ? props.fallbackSrc.value : undefined;

    return (
        <MantineImage
            className={props.class}
            style={props.style}
            src={src || undefined}
            alt={props.alt || undefined}
            fallbackSrc={fallbackSrc || undefined}
            fit={FIT[props.fit]}
            radius={props.radius || undefined}
            w={props.width || undefined}
            h={props.height || undefined}
        />
    );
}
