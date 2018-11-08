import {addToEntries} from 'wcb'
import * as Webpack from 'webpack'
import * as Server from 'webpack-dev-server'
import {configuration} from './config/renderer'

const PORT = 3000

/** Assets server path */
export const path = `http://localhost:${PORT}`

/**
 * Create assets server
 * @return Hapi server instance
 */
export function createServer() {
  const config = process.env.HOT_MODULES === 'true'
    ? addToEntries(configuration, [
      `webpack-dev-server/client?${path}`,
      'webpack/hot/only-dev-server',
    ])
    : configuration
  const server = new Server(Webpack(config), {
    hot: process.env.HOT_MODULES === 'true',
    stats: {
      all: false,
      builtAt: true,
      errors: true,
    },
  })
  server.listen(PORT)
  return server
}
