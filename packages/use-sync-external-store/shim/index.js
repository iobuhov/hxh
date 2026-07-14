// ESM-native replacement for `use-sync-external-store/shim`.
// React 19 exposes `useSyncExternalStore` natively; the upstream shim only
// exists to backfill it for React < 18, so we re-export the built-in.
export { useSyncExternalStore } from "react";
