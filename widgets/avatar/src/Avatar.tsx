import { ReactElement, createElement } from "react";
import { Avatar as MantineAvatar } from "../../mantine/mantine.main.mjs";
import { AvatarContainerProps } from "../typings/AvatarProps";

function parseSize(size: string): string | number {
    return /^\d+(\.\d+)?$/.test(size) ? Number(size) : size;
}

export function Avatar(props: AvatarContainerProps): ReactElement {
    const src = props.src?.status === "available" ? props.src.value : undefined;
    const name = props.userName || undefined;

    return (
        <MantineAvatar
            className={props.class}
            style={props.style}
            src={src || undefined}
            alt={name}
            name={name}
            size={props.size ? parseSize(props.size) : undefined}
            radius={props.radius || undefined}
            color={props.color || undefined}
        />
    );
}
