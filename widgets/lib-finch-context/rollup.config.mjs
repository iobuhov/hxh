import { join } from "node:path";

export default function finchContextAsShared(args) {
    return [
        {
            input: "src/finch-context.main.ts",
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                dir: join("dist", "tmp", "widgets", "com", "mendix", "finch", "finch-context"),
                entryFileNames: "[name].mjs",
                chunkFileNames: "[name].mjs",
                format: "es"
            }
        },
        ...args.configDefaultConfig
    ];
}
