import { ReactElement, CSSProperties, createElement } from "react";
import { TablePreviewProps, ColumnsPreviewType } from "../typings/TableProps";

// Note: we cannot render a real Mantine component here. Mantine 9 uses the React 19
// `React.use()` API, but Studio Pro's editor-preview runtime provides React 18, so
// rendering it throws "react.use is not a function". Approximate the look with plain DOM.

const border = "1px solid var(--mantine-color-gray-3, #dee2e6)";

const cellStyle: CSSProperties = {
    padding: "var(--mantine-spacing-sm, 12px)",
    borderBottom: border,
    verticalAlign: "top"
};

const headerStyle: CSSProperties = {
    ...cellStyle,
    fontWeight: 600,
    color: "var(--mantine-color-text, #000)",
    textAlign: "left"
};

function alignOf(col: ColumnsPreviewType): CSSProperties["textAlign"] {
    return (col.textAlign as CSSProperties["textAlign"]) || "left";
}

export function preview(props: TablePreviewProps): ReactElement {
    const columns = props.columns ?? [];

    if (columns.length === 0) {
        return (
            <table style={{ width: "100%", borderCollapse: "collapse", border, fontSize: "var(--mantine-font-size-sm, 14px)" }}>
                <thead>
                    <tr>
                        <th style={headerStyle}>Column 1</th>
                        <th style={headerStyle}>Column 2</th>
                        <th style={headerStyle}>Column 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={cellStyle} />
                        <td style={cellStyle} />
                        <td style={cellStyle} />
                    </tr>
                </tbody>
            </table>
        );
    }

    return (
        <table style={{ width: "100%", borderCollapse: "collapse", border, fontSize: "var(--mantine-font-size-sm, 14px)" }}>
            <thead>
                <tr>
                    {columns.map((col, i) => (
                        <th key={i} style={{ ...headerStyle, textAlign: alignOf(col), width: col.width || undefined }}>
                            {col.header || "Column"}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {columns.map((col, i) => {
                        const Content = col.content?.renderer;
                        return (
                            <td key={i} style={{ ...cellStyle, textAlign: alignOf(col) }}>
                                {Content ? (
                                    <Content caption="Cell">
                                        <div style={{ minHeight: 20 }} />
                                    </Content>
                                ) : null}
                            </td>
                        );
                    })}
                </tr>
            </tbody>
        </table>
    );
}
