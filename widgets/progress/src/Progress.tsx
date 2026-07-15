import { ReactElement, createElement } from "react";
import { Progress as MantineProgress } from "../../mantine/mantine.main.mjs";
import { ProgressContainerProps } from "../typings/ProgressProps";

function Sections(props: ProgressContainerProps): ReactElement | null {
    const { sections, sectionValue, sectionColor, sectionLabel } = props;

    if (!sections || sections.status !== "available") {
        return null;
    }

    return (
        <MantineProgress.Root className={props.class} style={props.style} size={props.size} radius={props.radius}>
            {(sections.items ?? []).map(item => {
                const value = sectionValue ? (sectionValue.get(item).value?.toNumber() ?? 0) : 0;
                const color = sectionColor?.get(item).value || undefined;
                const label = sectionLabel?.get(item).value;
                return (
                    <MantineProgress.Section
                        key={item.id}
                        value={value}
                        color={color}
                        striped={props.striped || props.animated}
                        animated={props.animated}
                    >
                        {label ? <MantineProgress.Label>{label}</MantineProgress.Label> : undefined}
                    </MantineProgress.Section>
                );
            })}
        </MantineProgress.Root>
    );
}

export function Progress(props: ProgressContainerProps): ReactElement | null {
    if (props.mode === "sections") {
        return <Sections {...props} />;
    }

    const { value } = props;
    const numericValue = value?.status === "available" && value.value !== undefined ? value.value.toNumber() : 0;

    return (
        <MantineProgress
            className={props.class}
            style={props.style}
            value={numericValue}
            striped={props.striped || props.animated}
            animated={props.animated}
            color={props.color || undefined}
            size={props.size}
            radius={props.radius}
        />
    );
}
