import {Server} from 'hapi'
import * as webpack from './plugin'

const DEFAULT_PORT = 3000
const envPort = process.env.PORT
let port = parseInt(envPort !== undefined ? envPort : '', 10)
if(isNaN(port)) {
  port = DEFAULT_PORT
}

/**
 * Create assets server
 * @return Hapi server instance
 */
export function createServer() {
  const server = new Server({port})

  ; // Launch server in the background
  (async() => { // tslint:disable-line:no-floating-promises
    await server.register(webpack)
    await server.start()
  })()

  return server
}
