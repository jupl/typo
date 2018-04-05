import * as webpack from 'webpack'
import {configuration} from '../config/renderer'

// Plugin
export {plugin} from 'hapi-webpack-plugin'

/** Options for plugin */
export const options = {
  compiler: webpack(configuration),
  assets: {
    noInfo: true,
    publicPath: configuration.output.publicPath,
  },
}
