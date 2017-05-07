import * as hapiWebpack from 'hapi-webpack-plugin'
import {
  IPluginConfigurator,
  IPluginOptions,
  PluginConfigurator,
} from 'hapiour-decorators'
import * as webpack from 'webpack'
import {clientConfiguration} from '../../webpack.config'

/** Plugin to include assets from Webpack for development */
@PluginConfigurator(hapiWebpack)
export class WebpackPlugin implements IPluginConfigurator {
  /** Hapi Webpack plugin options */
  options: IPluginOptions

  constructor() {
    this.options = {
      compiler: webpack(clientConfiguration),
      assets: {
        noInfo: true,
        publicPath: clientConfiguration.output.publicPath,
      },
    }
  }
}
