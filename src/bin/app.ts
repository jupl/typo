import {Server} from 'hapi'
import * as appRoutes from '../app/routes'

const DEFAULT_PORT = 3000
const envPort = process.env.PORT
let port = parseInt(envPort !== undefined ? envPort : '', 10)
const security = process.env.NODE_ENV !== 'development'
if(isNaN(port)) {
  port = DEFAULT_PORT
}

(async() => { // tslint:disable-line:no-floating-promises
  // Set up client assets based on environment
  let assets
  if(process.env.NODE_ENV !== 'development') {
    assets = require('../common/plugin/inert')
  }
  else {
    assets = require('../webpack/plugin')
    if(process.env.HOT_MODULES === 'true') {
      process.on('SIGTERM', () => process.exit(0))
    }
  }

  // Start up server
  const server = new Server({port, routes: {security}})
  await server.register(appRoutes)
  await server.register(assets)
  await server.start()
  console.log('Server running at:', server.info.uri)
})()
