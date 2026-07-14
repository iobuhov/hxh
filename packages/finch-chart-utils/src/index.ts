/**
 * Shared, dependency-free helpers that shape Mendix data into the structures
 * recharts / @mantine/charts expect. Widgets supply plain accessor callbacks so
 * these helpers stay free of any Mendix or Big.js types (which keeps this
 * package buildable on its own and cheap to bundle into each widget).
 */

/** Numeric coercion used across charts. `null`/`undefined`/unparseable → 0. */
export function toNumber(value: unknown): number {
    if (value === null || value === undefined) {
        return 0;
    }
    const n = typeof value === "number" ? value : Number(value.toString());
    return Number.isFinite(n) ? n : 0;
}

export interface SeriesConfig<TItem> {
    /** Series label used as the recharts data key, legend and tooltip name. */
    name: string;
    /** Theme color reference (e.g. `blue.6`) or any valid CSS color. */
    color: string;
    /** Reads this series' numeric value for a given row. */
    getValue: (item: TItem) => unknown;
}

export interface CartesianResult {
    data: Array<Record<string, string | number>>;
    series: Array<{ name: string; color: string }>;
}

/**
 * Builds the `data` array and `series` prop for multi-series cartesian charts
 * (Area, Bar, Line, Composite, Radar). Each row becomes an object keyed by the
 * category value plus one numeric entry per series.
 */
export function buildCartesianData<TItem>(
    items: TItem[],
    dataKey: string,
    getCategory: (item: TItem) => string,
    series: Array<SeriesConfig<TItem>>
): CartesianResult {
    const data = items.map(item => {
        const row: Record<string, string | number> = { [dataKey]: getCategory(item) };
        for (const s of series) {
            row[s.name] = toNumber(s.getValue(item));
        }
        return row;
    });

    return {
        data,
        series: series.map(s => ({ name: s.name, color: s.color }))
    };
}

export interface Segment {
    name: string;
    value: number;
    color: string;
}

/**
 * Builds the `data` array for single-series circular charts (Donut, Pie,
 * Funnel, RadialBar): one `{ name, value, color }` segment per row.
 */
export function buildSegmentData<TItem>(
    items: TItem[],
    getName: (item: TItem) => string,
    getValue: (item: TItem) => unknown,
    getColor: (item: TItem) => string
): Segment[] {
    return items.map(item => ({
        name: getName(item),
        value: toNumber(getValue(item)),
        color: getColor(item)
    }));
}
