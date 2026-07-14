import { ReactElement, createElement } from "react";
import { buildSegmentData } from "@mendix/finch-chart-utils";
import { BarsList as MantineBarsList } from "../../mantine-charts/mantine-charts.main.mjs";
import { BarsListContainerProps } from "../typings/BarsListProps";

export function BarsList(props: BarsListContainerProps): ReactElement {
    const {
        datasource,
        nameAttribute,
        valueAttribute,
        colorAttribute,
        barsLabel,
        valueLabel,
        barColor,
        barTextColor,
        barHeight,
        minBarSize,
        autoContrast
    } = props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const data = buildSegmentData(
        items,
        item => nameAttribute.get(item).displayValue ?? "",
        item => valueAttribute.get(item).value,
        item => (colorAttribute ? (colorAttribute.get(item).displayValue ?? "") : "")
    ).map(segment => ({
        name: segment.name,
        value: segment.value,
        color: segment.color || undefined
    }));

    return (
        <MantineBarsList
            className={props.class}
            style={props.style}
            data={data}
            barsLabel={barsLabel || undefined}
            valueLabel={valueLabel || undefined}
            barColor={barColor || undefined}
            barTextColor={barTextColor || undefined}
            barHeight={barHeight}
            minBarSize={minBarSize}
            autoContrast={autoContrast}
        />
    );
}
