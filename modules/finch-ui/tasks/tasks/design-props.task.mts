import { dest, src } from "gulp";
import path from "node:path";
import { inspectFiles } from "task-utils/inspect-files.mjs";
import { pipeline } from "task-utils/utils.mjs";
import { mergeYaml } from "../lib/merge-yaml.mjs";
import { list as widgets } from "../lib/widget-list.mjs";

const glob = [
  "common-design-properties.yaml",
  ...widgets.map((widget) => `node_modules/${widget}/src/design-properties.yaml`),
];

export const designProps = (options?: { projectPath: string }) => {
  const projectPath = options?.projectPath ?? "";
  const destPath = path.join(projectPath, "themesource/radixkit/web/");

  const merge = () => {
    let stream = src(glob, { allowEmpty: true });
    let inspect = inspectFiles({
      title: "Design properties yaml files",
      printPaths: false,
    });

    return pipeline(
      stream,
      inspect.start,
      inspect.end,
      mergeYaml({ filename: "design-properties.json" }),
      dest(destPath),
    );
  };

  return merge;
};
