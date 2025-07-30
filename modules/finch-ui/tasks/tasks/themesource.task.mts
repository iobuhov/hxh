import { dest, src } from "gulp";
import path from "node:path";
import { filterChanged } from "task-utils/changed.mjs";
import { inspectFiles } from "task-utils/inspect-files.mjs";
import { pipeline } from "task-utils/utils.mjs";

const glob = "node_modules/radix-ui-styles/sass/**/*.{scss,css}";

export const themesource = (options?: { projectPath: string; onlyChanged?: boolean }) => {
  const onlyChanged = options?.onlyChanged ?? false;
  // NOTE: all stream objects should be created within the task function
  const projectPath = options?.projectPath ?? "";
  const destPath = path.join(projectPath, "themesource/radixkit/web");

  const copyTheme = () => {
    let stream = src(glob);

    if (onlyChanged) {
      stream = filterChanged(stream, destPath);
    }

    const totalCopied = inspectFiles({
      title: "Copied theme files:",
      printPaths: true,
      printLimit: onlyChanged ? 10 : Infinity,
    });

    return pipeline(stream, totalCopied.start, dest(destPath), totalCopied.end);
  };

  return copyTheme;
};

themesource.watchGlob = glob;
