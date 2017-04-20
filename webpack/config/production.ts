import {Configuration, DefinePlugin, LoaderOptionsPlugin} from 'webpack'

/**
 * Add production build settings to Webpack configuration
 * @param config Configuration to modify
 * @return Updated configuration
 */
export function addProduction({
  plugins = [],
  ...config,
}: Configuration): Configuration {
  return {
    ...config,
    plugins: [
      ...plugins,
      new LoaderOptionsPlugin({minimize: true, debug: false}),
      new (require('babili-webpack-plugin'))(),
      new DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    ],
  }
}
