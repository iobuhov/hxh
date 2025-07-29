import path from "node:path";
import { $ } from "zx";
import { spawnSync } from "child_process";

/**
 * Extends the provided data with additional widget-related properties.
 *
 * @typedef {Object} ExtendedData
 * @property {string} packagePath - The package path for the widget.
 * @property {string} filePath - The file path for the widget (used in package.xml).
 * @property {string} widgetId - The widget ID.
 * @property {string} packageName - The package name in dash-case.
 * @property {string} widgetName - The widget name in PascalCase.
 *
 * @param {Object} data - The initial data object.
 * @param {string} data.name - The name of the widget.
 * @param {Object} plop - The plop object.
 * @param {Function} plop.getHelper - Function to get helper functions.
 * @returns {ExtendedData} The extended data object with additional properties.
 */
const extendData = (data, plop) => {
  const { name } = data;
  const pascalCase = plop.getHelper("pascalCase");
  const dashCase = plop.getHelper("dashCase");
  const lowerCaseName = name.toLowerCase();
  const widgetName = pascalCase(name);
  const packageName = `@mendix/${dashCase(name)}`;

  return {
    ...data,
    packagePath: `com.mendix.finch.widget`,
    filePath: `com/mendix/finch/widget/${lowerCaseName}`,
    widgetId: `com.mendix.finch.widget.${lowerCaseName}.${widgetName}`,
    packageName,
    widgetName,
  };
};

/**
 * Sets up the widget generator with custom actions and prompts.
 */
export default function widgetGenerator(plop) {
  plop.setActionType("install", async (data) => {
    const baseDir = path.join(data.turbo.paths.root, "widgets", data.packageName);
    spawnSync(`cd ${baseDir} && pnpm install && pnpm build`, { shell: true, stdio: "inherit" });
  });

  plop.setActionType("inject-widget-list", async (data) => {
    const { stdout } = await $`pnpm ls --depth=-1 --json --filter="{widgets/**}"`;
    const widgetList = JSON.parse(stdout).map((pkg) => pkg.name);
    data.widgetList = widgetList;
  });

  plop.setActionType("add-to-module", (data) => {
    spawnSync(`pnpm add --workspace ${data.packageName} --filter=radix-kit`, { shell: true, stdio: "inherit" });
  });

  plop.setGenerator("widget", {
    description: "Create a new widget",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Widget name?",
      },
      {
        type: "input",
        name: "description",
        message: "Widget description?",
      },
    ],
    actions: function (data) {
      data = extendData(data, plop);

      const baseDir = "{{turbo.paths.root}}/widgets/{{packageName}}";

      const editorConfig = {
        type: "add",
        data,
        path: `${baseDir}/src/{{widgetName}}.editorConfig.ts`,
        templateFile: "templates/editor-config.hbs",
      };

      const editorPreview = {
        type: "add",
        data,
        path: `${baseDir}/src/{{widgetName}}.editorPreview.tsx`,
        templateFile: "templates/editor-preview.hbs",
      };

      const editorTypes = {
        type: "add",
        data,
        path: `${baseDir}/typings/editor-types.d.ts`,
        templateFile: "templates/editor-types.hbs",
      };

      const eslintrc = {
        type: "add",
        data,
        path: `${baseDir}/.eslintrc.js`,
        templateFile: "templates/eslintrc.hbs",
      };

      const packageJson = {
        type: "add",
        data,
        path: `${baseDir}/package.json`,
        templateFile: "templates/package.json.hbs",
      };

      const packageXML = {
        type: "add",
        data,
        path: `${baseDir}/src/package.xml`,
        templateFile: "templates/package.xml.hbs",
      };

      const prettierConfig = {
        type: "add",
        data,
        path: `${baseDir}/prettier.config.js`,
        templateFile: "templates/prettier.config.hbs",
      };

      const prettierIgnore = {
        type: "add",
        data,
        path: `${baseDir}/.prettierignore`,
        templateFile: "templates/prettierignore.hbs",
      };

      const tsConfig = {
        type: "add",
        data,
        path: `${baseDir}/tsconfig.json`,
        templateFile: "templates/tsconfig.json.hbs",
      };
      const widget = {
        type: "add",
        data,
        path: `${baseDir}/src/{{widgetName}}.tsx`,
        templateFile: "templates/widget.hbs",
      };

      const widgetXML = {
        type: "add",
        data,
        path: `${baseDir}/src/{{widgetName}}.xml`,
        templateFile: "templates/widget.xml.hbs",
      };

      const modifyWidgetList = {
        type: "add",
        force: true,
        data,
        path: "{{turbo.paths.root}}/modules/radix-kit/scripts/lib/widget-list.mts",
        templateFile: "templates/widget-list.mts.hbs",
      };

      const designProps = {
        type: "add",
        data,
        path: `${baseDir}/src/design-properties.yaml`,
        templateFile: "templates/design-properties.yaml.hbs",
      };

      return [
        editorConfig,
        editorPreview,
        editorTypes,
        eslintrc,
        packageJson,
        packageXML,
        prettierConfig,
        prettierIgnore,
        tsConfig,
        widget,
        widgetXML,
        designProps,
        { type: "install", data },
        { type: "inject-widget-list", data },
        modifyWidgetList,
        { type: "add-to-module", data },
      ];
    },
  });
}
