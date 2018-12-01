import {ServerRegisterPluginObject} from 'hapi'
import hapiWebpackPlugin from 'hapi-webpack-plugin'
import Webpack, {Configuration} from 'webpack'

/**
 * Create Webpack plugin
 * @param configuration Webpack configuration
 * @return Hapi plugin
 */
export const createPlugin = (
  configuration: Configuration,
): ServerRegisterPluginObject<{}> => ({
  ...hapiWebpackPlugin,
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
