import { ReactElement, createElement } from "react";
import { buildCartesianData } from "@mendix/finch-chart-utils";
import { BarChart as MantineBarChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { BarChartContainerProps } from "../typings/BarChartProps";

export function BarChart(props: BarChartContainerProps): ReactElement {
    const {
        datasource,
        categoryAttribute,
        series,
        type,
        orientation,
        gridAxis,
        tickLine,
        height,
        unit,
        fillOpacity,
        withBarValueLabel,
        withLegend,
        withTooltip,
        withXAxis,
        withYAxis
    } = props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const { data, series: chartSeries } = buildCartesianData(
        items,
        "category",
        item => categoryAttribute.get(item).displayValue ?? "",
        series.map(s => ({
            name: s.name,
            color: s.color,
            getValue: item => s.valueAttribute.get(item).value
        }))
    );

    return (
        <MantineBarChart
            className={props.class}
            style={props.style}
            h={height}
            data={data}
            dataKey="category"
            series={chartSeries}
            type={type}
            orientation={orientation}
            gridAxis={gridAxis}
            tickLine={tickLine}
            unit={unit || undefined}
            fillOpacity={fillOpacity ? Number(fillOpacity.toString()) : 1}
            withBarValueLabel={withBarValueLabel}
            withLegend={withLegend}
            withTooltip={withTooltip}
            withXAxis={withXAxis}
            withYAxis={withYAxis}
        />
    );
}
