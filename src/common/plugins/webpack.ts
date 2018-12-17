import {ServerRegisterPluginObject as Plugin} from 'hapi'
import HapiWebpackPlugin from 'hapi-webpack-plugin'
import Webpack, {Configuration} from 'webpack'

/**
 * Create Webpack plugin
 * @param configuration Webpack configuration options
 * @return Hapi plugin
 */
export const createPlugin = (configuration: Configuration): Plugin<{}> => ({
  ...HapiWebpackPlugin,
  options: {
    assets: {
      logLevel: 'warn',
      publicPath: configuration.output
        ? configuration.output.publicPath
        : undefined,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
      },
    },
    compiler: Webpack(configuration),
  },
})
