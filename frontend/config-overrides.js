const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@configs": "src/configs",
    "@styles": "src/styles",
    "@utils": "src/utils",
    "@pages": "src/App/pages",
    "@assets": "src/assets",
    "@store": "src/store",
  })(config);
  return config;
};
