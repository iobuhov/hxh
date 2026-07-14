import { ReactElement, createElement } from "react";
import { toNumber } from "@mendix/finch-chart-utils";
import { Sparkline as MantineSparkline } from "../../mantine-charts/mantine-charts.main.mjs";
import { SparklineContainerProps } from "../typings/SparklineProps";

export function Sparkline(props: SparklineContainerProps): ReactElement {
    const { datasource, valueAttribute, color, curveType, strokeWidth, fillOpacity, withGradient, connectNulls, height } =
        props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const data = items.map(item => toNumber(valueAttribute.get(item).value));

    return (
        <MantineSparkline
            className={props.class}
            style={props.style}
            h={height}
            data={data}
            color={color}
            curveType={curveType}
            strokeWidth={strokeWidth ? Number(strokeWidth.toString()) : 2}
            fillOpacity={fillOpacity ? Number(fillOpacity.toString()) : 0.6}
            withGradient={withGradient}
            connectNulls={connectNulls}
        />
    );
}
