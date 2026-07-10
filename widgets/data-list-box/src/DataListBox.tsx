import { ReactElement, createElement, useState, useRef, useCallback, useId } from "react";
import { ObjectItem } from "mendix";
import { SlotContext, SlotContextValue } from "../../finch-context/finch-context.main.mjs";
import { DataListBoxContainerProps } from "../typings/DataListBoxProps";

export function DataListBox(props: DataListBoxContainerProps): ReactElement | null {
    const { datasource, content, ariaLabel, itemSelection, onSelectionChange } = props;
    const [focusedIndex, setFocusedIndex] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const baseId = useId();

    const items = datasource.status === "available" ? (datasource.items ?? []) : [];

    const select = useCallback(
        (item: ObjectItem) => {
            itemSelection.setSelection(item);
            if (onSelectionChange?.canExecute) {
                onSelectionChange.execute();
            }
        },
        [itemSelection, onSelectionChange]
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            let nextIndex = focusedIndex;

            switch (e.key) {
                case "ArrowDown":
                    e.preventDefault();
                    nextIndex = Math.min(focusedIndex + 1, items.length - 1);
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    nextIndex = Math.max(focusedIndex - 1, 0);
                    break;
                case "Home":
                    e.preventDefault();
                    nextIndex = 0;
                    break;
                case "End":
                    e.preventDefault();
                    nextIndex = items.length - 1;
                    break;
                case "Enter":
                case " ":
                    e.preventDefault();
                    if (items[focusedIndex]) {
                        select(items[focusedIndex]);
                    }
                    return;
                default:
                    return;
            }

            setFocusedIndex(nextIndex);
            const el = document.getElementById(`${baseId}-option-${nextIndex}`);
            el?.focus();
            el?.scrollIntoView({ block: "nearest" });
        },
        [focusedIndex, items.length, select, baseId]
    );

    if (datasource.status !== "available") {
        return null;
    }

    return (
        <div
            ref={containerRef}
            className={`mantine-DataListBox-root${props.class ? ` ${props.class}` : ""}`}
            role="listbox"
            aria-label={ariaLabel || undefined}
            onKeyDown={handleKeyDown}
        >
            {items.map((item, index) => {
                const optionId = `${baseId}-option-${index}`;
                const labelId = `${baseId}-option-${index}-label`;
                const isSelected = itemSelection.selection?.id === item.id;
                const isFocused = index === focusedIndex;

                const slotValue: SlotContextValue = {
                    label: { id: labelId }
                };

                return (
                    <SlotContext.Provider key={item.id} value={slotValue}>
                        <div
                            id={optionId}
                            className="mantine-DataListBox-option"
                            role="option"
                            aria-selected={isSelected}
                            aria-labelledby={labelId}
                            tabIndex={isFocused ? 0 : -1}
                            data-focused={isFocused || undefined}
                            data-selected={isSelected || undefined}
                            onFocus={() => setFocusedIndex(index)}
                            onClick={() => {
                                setFocusedIndex(index);
                                select(item);
                            }}
                        >
                            {content.get(item)}
                        </div>
                    </SlotContext.Provider>
                );
            })}
        </div>
    );
}
