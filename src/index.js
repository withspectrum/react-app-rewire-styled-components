const babelLoader = function(conf) {
  return conf.loader === 'babel';
};

function rewireStyledComponents(config) {
  const babelrc = config.module.loaders.find(babelLoader).query;
  babelrc.plugins = ['styled-components'].concat(babelrc.plugins || []);

  return config;
}

export default rewireStyledComponents;
