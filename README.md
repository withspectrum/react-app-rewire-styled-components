# `react-app-rewire-styled-components`

Add the [`babel-plugin-styled-components`](https://github.com/styled-components/babel-plugin-styled-components) to your `create-react-app` app via [`react-app-rewired`](https://github.com/timarney/react-app-rewired).

This gives you nicer generated class names that include the components' name, minification of styles and many more goodies 💪

## Installation

```sh
npm install --save react-app-rewire-styled-components
# alternatively if you have yarn installed
yarn add react-app-rewire-styled-components
```

## Usage

In the `config-overrides.js` you created for `react-app-rewired` add this code:

```JS
const rewireStyledComponents = require('react-app-rewire-styled-components');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);
  return config;
}
```

That's it, you're now using the `styled-components` Babel plugin!

To pass options to the Babel plugin use the third argument, it passes straight through to the plugin:

```JS
config = rewireStyledComponents(config, env, {
  ssr: true,
})
```

See [the available options](https://www.styled-components.com/docs/tooling#babel-plugin) in the `styled-components` documentation.

## License

Licensed under the MIT License, Copyright ©️ 2017 Maximilian Stoiber. See [LICENSE.md](LICENSE.md) for more information.
