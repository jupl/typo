import {Server} from 'hapi'
import * as appRoutes from '../app/routes'

const security = process.env.NODE_ENV !== 'development'
let port = parseInt(process.env.PORT !== undefined ? process.env.PORT : '', 10)
if(isNaN(port)) {
  port = 3000
}

(async() => { // tslint:disable-line:no-floating-promises
  const server = new Server({port, routes: {security}})
  await server.register(appRoutes)
  await server.start()
  console.log('Server running at:', server.info.uri)
})()
