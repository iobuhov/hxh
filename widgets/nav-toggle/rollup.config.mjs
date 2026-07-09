export default function mantineAsShared(args) {
    let [widgetESM, , editorPreview, editorConfig] = args.configDefaultConfig;

    widgetESM.external.push("../../mantine/mantine.main.mjs");
    widgetESM.external.push("../../lucide/lucide.main.mjs");

    return [widgetESM, editorPreview, editorConfig];
}
