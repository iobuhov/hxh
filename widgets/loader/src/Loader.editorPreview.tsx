import { ReactElement, createElement } from "react";
import { LoaderPreviewProps, SizeEnum } from "../typings/LoaderProps";

// A plain-DOM approximation of Mantine's Loader. We cannot render the real
// component here: Mantine 9 uses React 19's `React.use()`, but Studio Pro's
// editor-preview runtime provides React 18 ("react.use is not a function").

const SIZE_MAP: Record<SizeEnum, number> = {
    xs: 18,
    sm: 22,
    md: 36,
    lg: 44,
    xl: 58
};

export function preview(props: LoaderPreviewProps): ReactElement {
    const dim = SIZE_MAP[props.size];
    const color = `var(--mantine-color-${props.color}-6, #1971c2)`;

    return (
        <div
            className="mantine-Loader-root"
            style={{
                width: dim,
                height: dim,
                borderRadius: "50%",
                border: `${Math.max(2, Math.round(dim / 8))}px solid ${color}`,
                borderTopColor: "transparent"
            }}
        />
    );
}
