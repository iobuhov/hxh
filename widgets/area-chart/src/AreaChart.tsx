import { ReactElement, createElement } from "react";
import { buildCartesianData } from "@mendix/finch-chart-utils";
import { AreaChart as MantineAreaChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { AreaChartContainerProps } from "../typings/AreaChartProps";

export function AreaChart(props: AreaChartContainerProps): ReactElement {
    const {
        datasource,
        categoryAttribute,
        series,
        type,
        curveType,
        orientation,
        gridAxis,
        tickLine,
        height,
        unit,
        strokeWidth,
        withGradient,
        withDots,
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
        <MantineAreaChart
            className={props.class}
            style={props.style}
            h={height}
            data={data}
            dataKey="category"
            series={chartSeries}
            type={type}
            curveType={curveType}
            orientation={orientation}
            gridAxis={gridAxis}
            tickLine={tickLine}
            unit={unit || undefined}
            strokeWidth={strokeWidth}
            withGradient={withGradient}
            withDots={withDots}
            withLegend={withLegend}
            withTooltip={withTooltip}
            withXAxis={withXAxis}
            withYAxis={withYAxis}
        />
    );
}
