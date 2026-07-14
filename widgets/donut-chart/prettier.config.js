const base = require("@mendix/pluggable-widgets-tools/configs/prettier.base.json");

module.exports = {
  ...base,
  tabWidth: 2,
  plugins: [require.resolve("@prettier/plugin-xml")],
};
