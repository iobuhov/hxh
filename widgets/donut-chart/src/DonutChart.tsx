import { ReactElement, createElement } from "react";
import { buildSegmentData } from "@mendix/finch-chart-utils";
import { DonutChart as MantineDonutChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { DonutChartContainerProps } from "../typings/DonutChartProps";

export function DonutChart(props: DonutChartContainerProps): ReactElement {
    const {
        datasource,
        nameAttribute,
        valueAttribute,
        colorAttribute,
        size,
        thickness,
        strokeWidth,
        paddingAngle,
        startAngle,
        endAngle,
        chartLabel,
        labelsType,
        tooltipDataSource,
        withLabels,
        withLabelsLine,
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
        <MantineDonutChart
            className={props.class}
            style={props.style}
            data={data}
            size={size}
            thickness={thickness}
            strokeWidth={strokeWidth}
            paddingAngle={paddingAngle}
            startAngle={startAngle}
            endAngle={endAngle}
            chartLabel={chartLabel || undefined}
            labelsType={labelsType}
            tooltipDataSource={tooltipDataSource}
            withLabels={withLabels}
            withLabelsLine={withLabelsLine}
            withTooltip={withTooltip}
            withLegend={withLegend}
        />
    );
}
