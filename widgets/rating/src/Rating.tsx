import { ReactElement, createElement } from "react";
import { Rating as MantineRating } from "../../mantine/mantine.main.mjs";
import { Big } from "big.js";
import { RatingContainerProps } from "../typings/RatingProps";

export function Rating(props: RatingContainerProps): ReactElement {
    const { value } = props;

    const numericValue = value.status === "available" && value.value !== undefined ? value.value.toNumber() : 0;

    const handleChange = (next: number): void => {
        if (value.readOnly) {
            return;
        }

        value.setValue(new Big(next));

        if (props.onChange && props.onChange.canExecute && !props.onChange.isExecuting) {
            props.onChange.execute();
        }
    };

    return (
        <MantineRating
            className={props.class}
            style={props.style}
            value={numericValue}
            onChange={handleChange}
            count={props.count}
            fractions={props.fractions}
            readOnly={props.readOnly || value.readOnly}
            color={props.color || undefined}
            size={props.size}
        />
    );
}
