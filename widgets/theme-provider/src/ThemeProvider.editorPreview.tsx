import { ReactElement, createElement } from "react";
import { ThemeProviderPreviewProps } from "../typings/ThemeProviderProps";

const MANTINE_VARS = `
:root {
    --mantine-scale: 1;
    --mantine-color-scheme: dark;
    --mantine-color-white: #fff;
    --mantine-color-black: #000;
    --mantine-color-body: #1a1b1e;
    --mantine-color-text: #c1c2c5;
    --mantine-color-dimmed: #909296;
    --mantine-color-bright: #fff;
    --mantine-color-anchor: #4dabf7;
    --mantine-color-default: #25262b;
    --mantine-color-default-hover: #2c2e33;
    --mantine-color-default-color: #fff;
    --mantine-color-default-border: #373a40;
    --mantine-font-family: Open Sans, sans-serif;
    --mantine-font-family-headings: Open Sans, sans-serif;
    --mantine-font-size-xs: 0.75rem;
    --mantine-font-size-sm: 0.875rem;
    --mantine-font-size-md: 1rem;
    --mantine-font-size-lg: 1.125rem;
    --mantine-font-size-xl: 1.25rem;
    --mantine-line-height: 1.55;
    --mantine-heading-font-weight: 700;
    --mantine-spacing-xs: 0.625rem;
    --mantine-spacing-sm: 0.75rem;
    --mantine-spacing-md: 1rem;
    --mantine-spacing-lg: 1.25rem;
    --mantine-spacing-xl: 2rem;
    --mantine-radius-xs: 0.125rem;
    --mantine-radius-sm: 0.25rem;
    --mantine-radius-md: 0.5rem;
    --mantine-radius-lg: 1rem;
    --mantine-radius-xl: 2rem;
    --mantine-radius-default: 0.5rem;
    --mantine-primary-color-filled: #15aabf;
    --mantine-primary-color-light: rgba(21, 170, 191, 0.15);
    --mantine-primary-color-light-color: #15aabf;
}
`;

export function preview({ children }: ThemeProviderPreviewProps): ReactElement {
    const Placeholder = children.renderer;

    return (
        <div style={{ fontFamily: "var(--mantine-font-family)" }}>
            <style>{MANTINE_VARS}</style>
            <Placeholder caption="Content">
                <div />
            </Placeholder>
        </div>
    );
}
