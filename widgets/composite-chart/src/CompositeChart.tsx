import { ReactElement, createElement } from "react";
import { buildCartesianData } from "@mendix/finch-chart-utils";
import { CompositeChart as MantineCompositeChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { CompositeChartContainerProps } from "../typings/CompositeChartProps";

export function CompositeChart(props: CompositeChartContainerProps): ReactElement {
    const {
        datasource,
        categoryAttribute,
        series,
        curveType,
        gridAxis,
        tickLine,
        height,
        unit,
        strokeWidth,
        withDots,
        connectNulls,
        withPointLabels,
        withBarValueLabel,
        withLegend,
        withTooltip,
        withXAxis,
        withYAxis
    } = props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const { data, series: baseSeries } = buildCartesianData(
        items,
        "category",
        item => categoryAttribute.get(item).displayValue ?? "",
        series.map(s => ({
            name: s.name,
            color: s.color,
            getValue: item => s.valueAttribute.get(item).value
        }))
    );

    const chartSeries = baseSeries.map((s, index) => ({
        ...s,
        type: series[index].seriesType
    }));

    return (
        <MantineCompositeChart
            className={props.class}
            style={props.style}
            h={height}
            data={data}
            dataKey="category"
            series={chartSeries}
            curveType={curveType}
            gridAxis={gridAxis}
            tickLine={tickLine}
            unit={unit || undefined}
            strokeWidth={strokeWidth ? Number(strokeWidth.toString()) : 2}
            withDots={withDots}
            connectNulls={connectNulls}
            withPointLabels={withPointLabels}
            withBarValueLabel={withBarValueLabel}
            withLegend={withLegend}
            withTooltip={withTooltip}
            withXAxis={withXAxis}
            withYAxis={withYAxis}
        />
    );
}
