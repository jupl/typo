import * as hapiWebpack from 'hapi-webpack-plugin'
import {
  IPluginConfigurator,
  IPluginOptions,
  PluginConfigurator,
} from 'hapiour-decorators'
import * as webpack from 'webpack'
import {configuration} from '../config/renderer'

/** Plugin to include assets from Webpack for development */
@PluginConfigurator(hapiWebpack)
export class WebpackPlugin implements IPluginConfigurator {
  /** Hapi Webpack plugin options */
  options: IPluginOptions

  constructor() {
    this.options = {
      compiler: webpack(configuration),
      assets: {
        noInfo: true,
        publicPath: configuration.output.publicPath,
      },
    }
  }
}
