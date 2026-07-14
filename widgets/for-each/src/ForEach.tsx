import { ReactElement, createElement, Fragment } from "react";
import { ForEachContainerProps } from "../typings/ForEachProps";

export function ForEach(props: ForEachContainerProps): ReactElement | null {
    const { datasource, content } = props;

    if (datasource.status !== "available") {
        return null;
    }

    const items = datasource.items ?? [];

    return (
        <Fragment>
            {items.map(item => (
                <Fragment key={item.id}>{content.get(item)}</Fragment>
            ))}
        </Fragment>
    );
}
