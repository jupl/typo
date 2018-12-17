import {Server} from 'hapi'
import * as AppRoutes from '~/app/plugins/routes'
import * as Inert from '~/common/plugins/inert'
import {resolve} from '~/common/util'

// Gather configuration data
const production = process.env.NODE_ENV === 'production'
let port = Number(process.env.PORT)
if(isNaN(port)) {
  port = 3000
}

(async() => { // tslint:disable-line:no-floating-promises
  // Start up server
  const server = new Server({port, routes: {security: production}})
  await server.register([
    AppRoutes.createPlugin(),
    process.env.WEBPACK_BUILD === 'true'
      ? Inert.createPlugin(resolve('assets'))
      : await webpackPlugin(),
  ])
  await server.start()
  console.log('Server running at:', server.info.uri)
})()

async function webpackPlugin() {
  const [Webpack, {configuration}] = await Promise.all([
    import('~/common/plugins/webpack'),
    import('~/../webpack.config.client'),
  ])
  return Webpack.createPlugin(configuration)
}
