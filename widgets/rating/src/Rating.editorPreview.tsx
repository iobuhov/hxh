import { ReactElement, createElement } from "react";
import { RatingPreviewProps } from "../typings/RatingProps";

export function preview(_props: RatingPreviewProps): ReactElement {
    return <div className="mantine-Rating-root">★★★★★</div>;
}
