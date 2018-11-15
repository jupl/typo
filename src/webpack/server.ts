import {addToEntries} from 'wcb'
import webpack from 'webpack'
import Server from 'webpack-dev-server'
import {configuration as baseConfiguration} from './config/renderer'

const PORT = 3000

/** Assets server path */
export const path = `http://localhost:${PORT}`

/**
 * Create assets server
 * @return Hapi server instance
 */
export function createServer() {
  const configuration = {
    ...baseConfiguration,
    devServer: {...baseConfiguration.devServer!, port: PORT},
  }
  const config = configuration.devServer.hot === true
    ? addToEntries(configuration, [
      `webpack-dev-server/client?${path}`,
      'webpack/hot/only-dev-server',
    ])
    : configuration
  const server = new Server(webpack(config), {
    hot: configuration.devServer.hot,
    stats: {
      all: false,
      builtAt: true,
      errors: true,
    },
  })
  server.listen(PORT)
  return server
}
