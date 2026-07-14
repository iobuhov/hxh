import { ReactElement, createElement } from "react";
import { buildSegmentData } from "@mendix/finch-chart-utils";
import { Treemap as MantineTreemap } from "../../mantine-charts/mantine-charts.main.mjs";
import { TreemapContainerProps } from "../typings/TreemapProps";

export function Treemap(props: TreemapContainerProps): ReactElement {
    const {
        datasource,
        nameAttribute,
        valueAttribute,
        colorAttribute,
        height,
        strokeWidth,
        textColor,
        strokeColor,
        withTooltip,
        autoContrast
    } = props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const data = buildSegmentData(
        items,
        item => nameAttribute.get(item).displayValue ?? "",
        item => valueAttribute.get(item).value,
        item => (colorAttribute ? (colorAttribute.get(item).displayValue ?? "") : "")
    ).map(segment => ({
        name: segment.name,
        value: segment.value,
        color: segment.color || undefined
    }));

    return (
        <MantineTreemap
            className={props.class}
            style={props.style}
            data={data}
            dataKey="value"
            height={height}
            strokeWidth={strokeWidth}
            textColor={textColor || undefined}
            strokeColor={strokeColor || undefined}
            withTooltip={withTooltip}
            autoContrast={autoContrast}
        />
    );
}
