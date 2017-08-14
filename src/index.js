const { injectBabelPlugin } = require('react-app-rewired');

function rewireStyledComponents(
  config,
  env,
  styledComponentsPluginOptions = {}
) {
  return injectBabelPlugin(
    ['styled-components', styledComponentsPluginOptions],
    config
  );
}

module.exports = rewireStyledComponents;
