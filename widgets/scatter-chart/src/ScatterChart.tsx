import { ReactElement, createElement } from "react";
import { toNumber } from "@mendix/finch-chart-utils";
import { ScatterChart as MantineScatterChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { ScatterChartContainerProps } from "../typings/ScatterChartProps";

export function ScatterChart(props: ScatterChartContainerProps): ReactElement {
    const {
        datasource,
        xAttribute,
        yAttribute,
        seriesName,
        color,
        xAxisLabel,
        yAxisLabel,
        unitX,
        unitY,
        height,
        withLegend,
        withTooltip,
        withXAxis,
        withYAxis
    } = props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const data = [
        {
            color,
            name: seriesName,
            data: items.map(item => ({
                x: toNumber(xAttribute.get(item).value),
                y: toNumber(yAttribute.get(item).value)
            }))
        }
    ];

    const unit = unitX || unitY ? { x: unitX || undefined, y: unitY || undefined } : undefined;

    return (
        <MantineScatterChart
            className={props.class}
            style={props.style}
            h={height}
            data={data}
            dataKey={{ x: "x", y: "y" }}
            xAxisLabel={xAxisLabel || undefined}
            yAxisLabel={yAxisLabel || undefined}
            unit={unit}
            withLegend={withLegend}
            withTooltip={withTooltip}
            withXAxis={withXAxis}
            withYAxis={withYAxis}
        />
    );
}
