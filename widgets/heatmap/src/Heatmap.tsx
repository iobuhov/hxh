import { ReactElement, createElement } from "react";
import { toNumber } from "@mendix/finch-chart-utils";
import { Heatmap as MantineHeatmap } from "../../mantine-charts/mantine-charts.main.mjs";
import { HeatmapContainerProps } from "../typings/HeatmapProps";

export function Heatmap(props: HeatmapContainerProps): ReactElement {
    const {
        datasource,
        dateAttribute,
        valueAttribute,
        startDate,
        endDate,
        rectSize,
        gap,
        rectRadius,
        withMonthLabels,
        withWeekdayLabels,
        withOutsideDates,
        withTooltip,
        withLegend
    } = props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const data: Record<string, number> = {};
    for (const item of items) {
        const date = dateAttribute.get(item).value;
        if (!date) {
            continue;
        }
        const isoDate = date.toISOString().slice(0, 10);
        data[isoDate] = toNumber(valueAttribute.get(item).value);
    }

    return (
        <MantineHeatmap
            className={props.class}
            style={props.style}
            data={data}
            startDate={startDate || undefined}
            endDate={endDate || undefined}
            rectSize={rectSize}
            gap={gap}
            rectRadius={rectRadius}
            withMonthLabels={withMonthLabels}
            withWeekdayLabels={withWeekdayLabels}
            withOutsideDates={withOutsideDates}
            withTooltip={withTooltip}
            withLegend={withLegend}
            getTooltipLabel={withTooltip ? ({ date, value }) => `${date} – ${value ?? 0}` : undefined}
        />
    );
}
