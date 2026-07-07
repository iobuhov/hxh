import { join, format, parse, relative } from "node:path";

export default function mantineAsShared(args) {
    let [widgetESM, , editorPreview, editorConfig] = args.configDefaultConfig;

    widgetESM.external.push("../../mantine/mantine.main.mjs");

    return [widgetESM, editorPreview, editorConfig];
}
