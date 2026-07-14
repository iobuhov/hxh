import { ReactElement, createElement } from "react";
import { buildCartesianData } from "@mendix/finch-chart-utils";
import { RadarChart as MantineRadarChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { RadarChartContainerProps } from "../typings/RadarChartProps";

export function RadarChart(props: RadarChartContainerProps): ReactElement {
    const {
        datasource,
        categoryAttribute,
        series,
        height,
        withPolarGrid,
        withPolarAngleAxis,
        withPolarRadiusAxis,
        withDots,
        withLegend,
        withTooltip
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
        <MantineRadarChart
            className={props.class}
            style={props.style}
            h={height}
            data={data}
            dataKey="category"
            series={chartSeries}
            withPolarGrid={withPolarGrid}
            withPolarAngleAxis={withPolarAngleAxis}
            withPolarRadiusAxis={withPolarRadiusAxis}
            withDots={withDots}
            withLegend={withLegend}
            withTooltip={withTooltip}
        />
    );
}
