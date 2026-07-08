import { join } from "node:path";

export default function lucideAsShared(args) {
    return [
        {
            input: "src/lucide.main.ts",
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                dir: join("dist", "tmp", "widgets", "com", "mendix", "finch", "lucide"),
                entryFileNames: "[name].mjs",
                chunkFileNames: "[name].mjs",
                format: "es"
            }
        },
        ...args.configDefaultConfig
    ];
}
