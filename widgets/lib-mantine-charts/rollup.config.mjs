import { join } from "node:path";

// LibMantine bundles @mantine/core + @mantine/hooks into a single sibling runtime
// module and re-exports everything from it. We reuse that runtime instead of
// bundling our own copy: keep core/hooks external, then rewrite the bare
// specifiers to LibMantine's relative runtime path so they resolve at runtime
// in Mendix (bare "@mantine/core" would not). React is provided by the host.
//
// mpx uses rolldown, which ignores rollup's `output.paths`, so the remap is done
// with a resolveId plugin that marks the specifier external at a custom path.
const MANTINE_RUNTIME = "../mantine/mantine.main.mjs";

const remapMantineRuntime = {
    name: "remap-mantine-core-runtime",
    resolveId(source) {
        if (source === "@mantine/core" || source === "@mantine/hooks") {
            return { id: MANTINE_RUNTIME, external: true };
        }
        return null;
    }
};

export default function mantineChartsAsShared(args) {
    return [
        {
            input: "src/mantine-charts.main.ts",
            external: ["react", "react-dom", "react/jsx-runtime"],
            plugins: [remapMantineRuntime],
            output: {
                dir: join("dist", "tmp", "widgets", "com", "mendix", "finch", "mantine-charts"),
                entryFileNames: "[name].mjs",
                chunkFileNames: "[name].mjs",
                format: "es",
                advancedChunks: {
                    groups: [
                        {
                            test: /recharts/,
                            name: "recharts"
                        }
                    ]
                }
            }
        },
        ...args.configDefaultConfig
    ];
}
