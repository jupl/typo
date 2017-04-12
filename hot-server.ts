import {Server} from 'hapi'
import * as webpack from 'webpack'
import config from './webpack.config'
import * as hapiWebpack from 'hapi-webpack-plugin'

// Set up server port number with a default
const RADIX = 10
const DEFAULT_PORT = 3000
const port = parseInt(process.env.PORT, RADIX) || DEFAULT_PORT

initialize() // tslint:disable-line:no-floating-promises

async function initialize() {
  // Create a new server instance
  const server = new Server()
  server.connection({port})

  // Add webpack plugin so server knows to get static assets from builds
  await server.register({
    register: hapiWebpack,
    options: {
      compiler: webpack(config),
      assets: {
        noInfo: true,
        publicPath: config.output && config.output.publicPath,
      },
    },
  })

  // Start server and notify
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}
