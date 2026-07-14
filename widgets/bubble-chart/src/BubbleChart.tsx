import { ReactElement, createElement } from "react";
import { toNumber } from "@mendix/finch-chart-utils";
import { BubbleChart as MantineBubbleChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { BubbleChartContainerProps } from "../typings/BubbleChartProps";

export function BubbleChart(props: BubbleChartContainerProps): ReactElement {
    const { datasource, xAttribute, yAttribute, zAttribute, color, label, rangeMin, rangeMax, height, withTooltip } =
        props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const data = items.map(item => ({
        x: xAttribute.get(item).displayValue ?? "",
        y: toNumber(yAttribute.get(item).value),
        z: toNumber(zAttribute.get(item).value)
    }));

    return (
        <MantineBubbleChart
            className={props.class}
            style={props.style}
            h={height}
            data={data}
            dataKey={{ x: "x", y: "y", z: "z" }}
            range={[rangeMin, rangeMax]}
            color={color}
            label={label || undefined}
            withTooltip={withTooltip}
        />
    );
}
