export default function mantineAsShared(args) {
    let [widgetESM, , editorPreview, editorConfig] = args.configDefaultConfig;

    widgetESM.external.push("../../mantine-charts/mantine-charts.main.mjs");

    return [widgetESM, editorPreview, editorConfig];
}
