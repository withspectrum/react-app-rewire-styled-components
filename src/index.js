function rewireStyledComponents(
  config,
  env,
  styledComponentsPluginOptions = {}
) {
  const babelLoader = config.module.rules.find(
    rule => rule.loader && rule.loader.indexOf('babel-loader') > 0
  );
  babelLoader.options.plugins = (babelLoader.options.plugins || [])
    .concat([['styled-components', styledComponentsPluginOptions]]);

  return config;
}

module.exports = rewireStyledComponents;
