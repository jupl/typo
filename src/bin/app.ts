import {Server} from 'hapi'
import * as AppRoutes from '../app/routes'
import {resolve} from '../common/path'
import * as Inert from '../common/plugin/inert'

const security = process.env.NODE_ENV !== 'development'
let port = parseInt(process.env.PORT !== undefined ? process.env.PORT : '', 10)
if(isNaN(port)) {
  port = 3000
}

(async() => { // tslint:disable-line:no-floating-promises
  // Start up server
  const server = new Server({port, routes: {security}})
  await server.register([
    AppRoutes,
    process.env.WEBPACK_BUILD === 'true'
      ? Inert.createPlugin(resolve('assets'))
      : await webpackPlugin(),
  ])
  await server.start()
  console.log('Server running at:', server.info.uri)
})()

async function webpackPlugin() {
  const [{createPlugin}, {configuration}] = await Promise.all([
    import('../common/plugin/webpack'),
    import('../../webpack.config.client'),
  ])
  return createPlugin(configuration)
}
