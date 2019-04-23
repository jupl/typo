// Patch to fix tsconfig-paths plugin
// tslint:disable-next-line:no-object-mutation
Object.assign(process.env, {TS_NODE_PROJECT: ''})

import {Server} from 'http'
import {addToEntries} from 'wcb'
import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import {configuration as baseConfiguration} from './webpack.config.renderer'

let port = Number(process.env.PORT)
if(isNaN(port)) {
  port = 3000
}

/**
 * Create assets server
 * @return Hapi server instance
 */
export async function createServer() {
  const configuration = {
    ...baseConfiguration,
    devServer: {...baseConfiguration.devServer!, port},
  }
  const config = configuration.devServer.hot === true
    ? addToEntries(configuration, [
      `webpack-dev-server/client?http://localhost:${port}`,
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
    const instance = server.listen(port, 'localhost', error => {
      if(!error) {
        resolve(instance)
      }
      else {
        reject(error)
      }
    })
  })
}
