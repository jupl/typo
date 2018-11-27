import {Server} from 'hapi'
import * as appRoutes from '../app/routes'
import * as inert from '../common/plugin/inert'

const security = process.env.NODE_ENV !== 'development'
let port = parseInt(process.env.PORT !== undefined ? process.env.PORT : '', 10)
if(isNaN(port)) {
  port = 3000
}

(async() => { // tslint:disable-line:no-floating-promises
  // Set up client assets based on environment
  const assets = process.env.WEBPACK_BUILD === 'true'
    ? inert
    : await import('../webpack/plugin')

  // Start up server
  const server = new Server({port, routes: {security}})
  await server.register(appRoutes)
  await server.register(assets)
  await server.start()
  console.log('Server running at:', server.info.uri)
})()
