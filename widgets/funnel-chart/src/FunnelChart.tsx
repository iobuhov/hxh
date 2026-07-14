import { ReactElement, createElement } from "react";
import { buildSegmentData } from "@mendix/finch-chart-utils";
import { FunnelChart as MantineFunnelChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { FunnelChartContainerProps } from "../typings/FunnelChartProps";

export function FunnelChart(props: FunnelChartContainerProps): ReactElement {
    const {
        datasource,
        nameAttribute,
        valueAttribute,
        colorAttribute,
        size,
        strokeWidth,
        labelsPosition,
        tooltipDataSource,
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
        <MantineFunnelChart
            className={props.class}
            style={props.style}
            data={data}
            size={size}
            strokeWidth={strokeWidth}
            labelsPosition={labelsPosition}
            tooltipDataSource={tooltipDataSource}
            withLabels={withLabels}
            withTooltip={withTooltip}
            withLegend={withLegend}
        />
    );
}
