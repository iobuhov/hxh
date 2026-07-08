import { ReactElement, createElement } from "react";
import { TitlePreviewProps } from "../typings/TitleProps";

const SIZES: Record<number, { fontSize: number; lineHeight: number; fontWeight: number }> = {
    1: { fontSize: 34, lineHeight: 1.3, fontWeight: 700 },
    2: { fontSize: 26, lineHeight: 1.35, fontWeight: 700 },
    3: { fontSize: 22, lineHeight: 1.4, fontWeight: 700 },
    4: { fontSize: 18, lineHeight: 1.45, fontWeight: 700 },
    5: { fontSize: 16, lineHeight: 1.5, fontWeight: 700 },
    6: { fontSize: 14, lineHeight: 1.5, fontWeight: 700 }
};

export function preview({ text, order }: TitlePreviewProps): ReactElement {
    const level = order || 1;
    const style = SIZES[level] || SIZES[1];
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag
            style={{
                fontFamily: "var(--mantine-font-family, Open Sans, sans-serif)",
                fontSize: style.fontSize,
                lineHeight: style.lineHeight,
                fontWeight: style.fontWeight,
                margin: 0
            }}
        >
            {text || "Title"}
        </Tag>
    );
}
