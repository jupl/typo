import {Server} from 'hapi'
import * as appRoutes from '../app/routes'

const RADIX = 10
const DEFAULT_PORT = 3000
let port = parseInt(process.env.PORT, RADIX)
const security = process.env.NODE_ENV !== 'development'
if(isNaN(port)) {
  port = DEFAULT_PORT
}

(async() => { // tslint:disable-line:no-floating-promises
  const assets = process.env.NODE_ENV === 'development'
    ? require('../webpack/plugin')
    : require('../common/plugin/inert')
  const server = new Server()
  server.connection({port, routes: {security}})
  await server.register(appRoutes)
  await server.register(assets)
  await server.start()
  console.log('Server running at:', server.info!.uri)
})()
