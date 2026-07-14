export default function mantineAsShared(args) {
    let [widgetESM, , editorPreview, editorConfig] = args.configDefaultConfig;

    widgetESM.external.push("../../mantine/mantine.main.mjs");
    widgetESM.external.push("../../finch-context/finch-context.main.mjs");

    return [widgetESM, editorPreview, editorConfig];
}
