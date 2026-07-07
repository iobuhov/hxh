import { ReactElement, createElement } from "react";
import { Breadcrumbs as MantineBreadcrumbs } from "../../mantine/mantine.main.mjs";
import { BreadcrumbsContainerProps } from "../typings/BreadcrumbsProps";

export function Breadcrumbs(props: BreadcrumbsContainerProps): ReactElement | null {
    const { datasource, label, action, separator } = props;

    if (datasource.status !== "available" || !datasource.items) {
        return null;
    }

    const separatorValue = separator?.status === "available" ? separator.value : "/";

    return (
        <MantineBreadcrumbs separator={separatorValue}>
            {datasource.items.map(item => {
                const text = label.get(item).value ?? "";
                const itemAction = action?.get(item);
                const canExecute = itemAction?.canExecute ?? false;

                if (canExecute) {
                    return (
                        <a
                            key={item.id}
                            onClick={e => {
                                e.preventDefault();
                                itemAction!.execute();
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            {text}
                        </a>
                    );
                }

                return <span key={item.id}>{text}</span>;
            })}
        </MantineBreadcrumbs>
    );
}
