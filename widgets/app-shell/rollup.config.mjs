import { join, format, parse, relative, resolve } from "node:path";

export default function mantineAsShared(args) {
    let [widgetESM, , editorPreview, editorConfig] = args.configDefaultConfig;

    widgetESM.external.push("../../mantine/mantine.main.mjs");

    return [widgetESM, editorConfig, editorPreview];
}
