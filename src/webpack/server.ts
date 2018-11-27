import {Server} from 'http'
import {addToEntries} from 'wcb'
import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import {configuration as baseConfiguration} from './config/renderer'

const PORT = 3000

/**
 * Create assets server
 * @return Hapi server instance
 */
export async function createServer() {
  const configuration = {
    ...baseConfiguration,
    devServer: {...baseConfiguration.devServer!, port: PORT},
  }
  const config = configuration.devServer.hot === true
    ? addToEntries(configuration, [
      `webpack-dev-server/client?http://localhost:${PORT}`,
      'webpack/hot/only-dev-server',
    ])
    : configuration
  const server = new WebpackDevServer(Webpack(config), {
    hot: configuration.devServer.hot,
    stats: {
      all: false,
      builtAt: true,
      errors: true,
    },
  })
  return new Promise<Server>((resolve, reject) => {
    const instance = server.listen(PORT, 'localhost', error => {
      if(error) {
        resolve(instance)
      }
      else {
        reject(error)
      }
    })
  })
}
