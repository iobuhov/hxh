import { ReactElement, createElement } from "react";
import { buildCartesianData } from "@mendix/finch-chart-utils";
import { LineChart as MantineLineChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { LineChartContainerProps } from "../typings/LineChartProps";

export function LineChart(props: LineChartContainerProps): ReactElement {
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
        fillOpacity,
        withDots,
        connectNulls,
        withPointLabels,
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
        <MantineLineChart
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
            strokeWidth={strokeWidth ? Number(strokeWidth.toString()) : 2}
            fillOpacity={fillOpacity ? Number(fillOpacity.toString()) : 1}
            withDots={withDots}
            connectNulls={connectNulls}
            withPointLabels={withPointLabels}
            withLegend={withLegend}
            withTooltip={withTooltip}
            withXAxis={withXAxis}
            withYAxis={withYAxis}
        />
    );
}
