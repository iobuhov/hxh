import { join } from "node:path";

export default function mantineAsShared(args) {
    return [
        {
            input: "src/mantine.main.ts",
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                dir: join("dist", "tmp", "widgets", "com", "mendix", "finch", "mantine"),
                entryFileNames: "[name].mjs",
                chunkFileNames: "[name].mjs",
                format: "es",
                advancedChunks: {
                    groups: [
                        {
                            test: /@mantine\/hooks/,
                            name: "hooks"
                        },
                        {
                            test: /@mantine\/core/,
                            name: "core"
                        }
                    ]
                }
            }
        },
        ...args.configDefaultConfig
    ];
}
