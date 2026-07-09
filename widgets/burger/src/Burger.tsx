import { ReactElement, createElement, useContext } from "react";
import { Burger as MantineBurger } from "../../mantine/mantine.main.mjs";
import { BurgerContainerProps } from "../typings/BurgerProps";

const KEY = Symbol.for("finch.appshell.context");

export function Burger(props: BurgerContainerProps): ReactElement {
    const [opened, { toggle }] = useContext((window as any)[KEY]) ?? [false, {}];

    return (
        <MantineBurger
            opened={opened}
            onClick={toggle}
            size={props.size || "md"}
            hiddenFrom="sm"
        />
    );
}
