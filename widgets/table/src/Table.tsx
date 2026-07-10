import { ReactElement, createElement } from "react";
import { Table as MantineTable } from "../../mantine/mantine.main.mjs";
import { TableContainerProps } from "../typings/TableProps";

export function Table(props: TableContainerProps): ReactElement {
    const items = props.datasource.status === "available" ? (props.datasource.items ?? []) : [];

    return (
        <MantineTable
            className={props.class}
            style={props.style}
            withTableBorder={props.withTableBorder}
            withColumnBorders={props.withColumnBorders}
            withRowBorders={props.withRowBorders}
            striped={props.striped ? "odd" : undefined}
            highlightOnHover={props.highlightOnHover}
            stickyHeader={props.stickyHeader}
            horizontalSpacing={props.horizontalSpacing || "sm"}
            verticalSpacing={props.verticalSpacing || "sm"}
        >
            <MantineTable.Thead>
                <MantineTable.Tr>
                    {props.columns.map((col, i) => (
                        <MantineTable.Th key={i} style={{ textAlign: col.textAlign, width: col.width || undefined }}>
                            {col.header}
                        </MantineTable.Th>
                    ))}
                </MantineTable.Tr>
            </MantineTable.Thead>
            <MantineTable.Tbody>
                {items.map(item => (
                    <MantineTable.Tr key={item.id}>
                        {props.columns.map((col, i) => (
                            <MantineTable.Td key={i} style={{ textAlign: col.textAlign }}>
                                {col.content?.get(item)}
                            </MantineTable.Td>
                        ))}
                    </MantineTable.Tr>
                ))}
            </MantineTable.Tbody>
        </MantineTable>
    );
}
