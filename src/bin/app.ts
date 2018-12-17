import {Server} from 'hapi'
import * as AppRoutes from '~/app/plugins/routes'

// Gather configuration data
const production = process.env.NODE_ENV === 'production'
let port = Number(process.env.PORT)
if(isNaN(port)) {
  port = 3000
}

(async() => { // tslint:disable-line:no-floating-promises
  const server = new Server({port, routes: {security: production}})
  await server.register(AppRoutes.createPlugin())
  await server.start()
  console.log('Server running at:', server.info.uri)
})()
