import { ReactElement, createElement } from "react";
import { buildSegmentData } from "@mendix/finch-chart-utils";
import { RadialBarChart as MantineRadialBarChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { RadialBarChartContainerProps } from "../typings/RadialBarChartProps";

export function RadialBarChart(props: RadialBarChartContainerProps): ReactElement {
    const {
        datasource,
        nameAttribute,
        valueAttribute,
        colorAttribute,
        height,
        barSize,
        startAngle,
        endAngle,
        emptyBackgroundColor,
        withBackground,
        withLabels,
        withTooltip,
        withLegend
    } = props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const data = buildSegmentData(
        items,
        item => nameAttribute.get(item).displayValue ?? "",
        item => valueAttribute.get(item).value,
        item => colorAttribute.get(item).value ?? ""
    );

    return (
        <MantineRadialBarChart
            className={props.class}
            style={props.style}
            h={height}
            data={data}
            dataKey="value"
            barSize={barSize}
            startAngle={startAngle}
            endAngle={endAngle}
            emptyBackgroundColor={emptyBackgroundColor || undefined}
            withBackground={withBackground}
            withLabels={withLabels}
            withTooltip={withTooltip}
            withLegend={withLegend}
        />
    );
}
