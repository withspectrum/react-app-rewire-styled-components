function rewireStyledComponents(
  config,
  env,
  styledComponentsPluginOptions = {}
) {
  let babelLoader ;
  const checkRule = rule => rule.loader && rule.loader.indexOf('babel-loader') > 0;
  config.module.rules.every(rule => {
    if (rule.oneOf) {
      babelLoader = (rule.oneOf.find(checkRule))
    } else if (checkRule(rule)) {
      babelLoader = rule.loader;
    }
    return !babelLoader;
  });

  babelLoader.options.plugins = (babelLoader.options.plugins || [])
    .concat([['styled-components', styledComponentsPluginOptions]]);

  return config;
}

module.exports = rewireStyledComponents;
