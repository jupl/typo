import {Server} from 'hapi'
import * as appRoutes from '../app/routes'

const RADIX = 10
const DEFAULT_PORT = 3000
const envPort = process.env.PORT
let port = parseInt(envPort !== undefined ? envPort : '', RADIX)
const security = process.env.NODE_ENV !== 'development'
if(isNaN(port)) {
  port = DEFAULT_PORT
}

(async() => { // tslint:disable-line:no-floating-promises
  const server = new Server()
  server.connection({port, routes: {security}})
  await server.register(appRoutes)
  await server.start()
  console.log('Server running at:', server.info!.uri)
})()
