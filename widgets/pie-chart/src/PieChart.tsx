import { ReactElement, createElement } from "react";
import { buildSegmentData } from "@mendix/finch-chart-utils";
import { PieChart as MantinePieChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { PieChartContainerProps } from "../typings/PieChartProps";

export function PieChart(props: PieChartContainerProps): ReactElement {
    const {
        datasource,
        nameAttribute,
        valueAttribute,
        colorAttribute,
        size,
        strokeWidth,
        paddingAngle,
        startAngle,
        endAngle,
        labelsPosition,
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
        <MantinePieChart
            className={props.class}
            style={props.style}
            data={data}
            size={size}
            strokeWidth={strokeWidth}
            paddingAngle={paddingAngle}
            startAngle={startAngle}
            endAngle={endAngle}
            labelsPosition={labelsPosition}
            labelsType={labelsType}
            tooltipDataSource={tooltipDataSource}
            withLabels={withLabels}
            withLabelsLine={withLabelsLine}
            withTooltip={withTooltip}
            withLegend={withLegend}
        />
    );
}
