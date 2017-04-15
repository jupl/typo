import {
  IPluginConfigurator,
  IPluginOptions,
  PluginConfigurator,
} from 'hapiour-decorators'
import * as webpack from 'webpack'
import config from '../../webpack.config'
import * as hapiWebpack from 'hapi-webpack-plugin'

@PluginConfigurator(hapiWebpack)
export default class WebpackConfigurator implements IPluginConfigurator {
  public options: IPluginOptions

  public constructor() {
    this.options = {
      compiler: webpack(config),
      assets: {
        noInfo: true,
        publicPath: config.output && config.output.publicPath,
      },
    }
  }
}
