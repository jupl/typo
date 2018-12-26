import {Server} from 'hapi'
import * as AppRoutes from '~/app/routes'
import * as Log from '~/common/plugins/log'

// Gather configuration data
const production = process.env.NODE_ENV === 'production'
let port = Number(process.env.PORT)
if(isNaN(port)) {
  port = 3000
}

(async() => { // tslint:disable-line:no-floating-promises
  const server = new Server({port, routes: {security: production}})
  await server.register([
    Log.createPlugin(),
    AppRoutes.createPlugin(),
  ])
  await server.start()
  server.log([], `Server running at ${server.info.uri}`)
})()
