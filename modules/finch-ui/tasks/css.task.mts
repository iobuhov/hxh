import { $ } from "zx";

export async function css() {
    await $`postcss src/css/main.css -o dist/themesource/finch-ui/web/main.css`;
}
