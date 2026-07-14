import { ReactElement, createElement } from "react";
import { toNumber } from "@mendix/finch-chart-utils";
import { SankeyChart as MantineSankeyChart } from "../../mantine-charts/mantine-charts.main.mjs";
import { SankeyChartContainerProps } from "../typings/SankeyChartProps";

export function SankeyChart(props: SankeyChartContainerProps): ReactElement {
    const {
        datasource,
        sourceAttribute,
        targetAttribute,
        valueAttribute,
        height,
        nodeWidth,
        nodePadding,
        iterations,
        linkOpacity,
        linkCurvature,
        nodeColor,
        linkColor,
        textColor,
        withTooltip
    } = props;

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    // Derive the distinct node names (in first-seen order) so we can map each
    // link's string source/target to the numeric index recharts' Sankey expects.
    const nodeIndex = new Map<string, number>();
    const nodes: Array<{ name: string }> = [];
    const ensureNode = (name: string): number => {
        let index = nodeIndex.get(name);
        if (index === undefined) {
            index = nodes.length;
            nodeIndex.set(name, index);
            nodes.push({ name });
        }
        return index;
    };

    const links = items.map(item => {
        const source = sourceAttribute.get(item).displayValue ?? "";
        const target = targetAttribute.get(item).displayValue ?? "";
        return {
            source: ensureNode(source),
            target: ensureNode(target),
            value: toNumber(valueAttribute.get(item).value)
        };
    });

    return (
        <MantineSankeyChart
            className={props.class}
            style={props.style}
            data={{ nodes, links }}
            height={height}
            nodeWidth={nodeWidth}
            nodePadding={nodePadding}
            iterations={iterations}
            linkOpacity={linkOpacity ? Number(linkOpacity.toString()) : 0.4}
            linkCurvature={linkCurvature ? Number(linkCurvature.toString()) : 0.5}
            nodeColor={nodeColor || undefined}
            linkColor={linkColor || undefined}
            textColor={textColor || undefined}
            withTooltip={withTooltip}
        />
    );
}
