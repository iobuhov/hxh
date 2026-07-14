// ESM-native reimplementation of `use-sync-external-store/with-selector`.
// Ported verbatim from use-sync-external-store 1.6.0, but importing React's
// native hooks as ESM instead of `require("react")`. React 19 ships
// `useSyncExternalStore`, so no shim/polyfill is needed here.
import { useSyncExternalStore, useRef, useEffect, useMemo, useDebugValue } from "react";

function is(x, y) {
    return (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y);
}

const objectIs = typeof Object.is === "function" ? Object.is : is;

export function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    const instRef = useRef(null);
    let inst;
    if (instRef.current === null) {
        inst = { hasValue: false, value: null };
        instRef.current = inst;
    } else {
        inst = instRef.current;
    }

    const [getSelection, getServerSelection] = useMemo(() => {
        let hasMemo = false;
        let memoizedSnapshot;
        let memoizedSelection;
        const memoizedSelector = nextSnapshot => {
            if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                const firstSelection = selector(nextSnapshot);
                if (isEqual !== undefined && inst.hasValue) {
                    const currentSelection = inst.value;
                    if (isEqual(currentSelection, firstSelection)) {
                        memoizedSelection = currentSelection;
                        return currentSelection;
                    }
                }
                memoizedSelection = firstSelection;
                return firstSelection;
            }
            const currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) {
                return currentSelection;
            }
            const nextSelection = selector(nextSnapshot);
            if (isEqual !== undefined && isEqual(currentSelection, nextSelection)) {
                memoizedSnapshot = nextSnapshot;
                return currentSelection;
            }
            memoizedSnapshot = nextSnapshot;
            memoizedSelection = nextSelection;
            return nextSelection;
        };
        const maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;
        return [
            () => memoizedSelector(getSnapshot()),
            maybeGetServerSnapshot === null ? undefined : () => memoizedSelector(maybeGetServerSnapshot())
        ];
    }, [getSnapshot, getServerSnapshot, selector, isEqual]);

    const value = useSyncExternalStore(subscribe, getSelection, getServerSelection);

    useEffect(() => {
        inst.hasValue = true;
        inst.value = value;
    }, [value]);

    useDebugValue(value);
    return value;
}
