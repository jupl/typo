import {Server, ServerRegisterPluginObject} from 'hapi'
import {resolve} from 'path'
import * as AppRoutes from '~/app/routes'
import * as Inert from '~/common/plugins/inert'
import * as Log from '~/common/plugins/log'

// Gather configuration data
const production = process.env.NODE_ENV === 'production'
let port = Number(process.env.PORT)
if(isNaN(port)) {
  port = 3000
}

(async() => { // tslint:disable-line:no-floating-promises
  // Start up server
  const server = new Server({
    port,
    routes: {
      files: {relativeTo: resolve(__dirname, '../assets')},
      security: production,
    },
  })
  let plugins: ServerRegisterPluginObject<{}>[] = [
    Log.createPlugin(),
    AppRoutes.createPlugin(),
  ]
  if(process.env.WEBPACK_BUILD === 'true' || process.env.API_ONLY !== 'true') {
    plugins = [
      ...plugins,
      process.env.WEBPACK_BUILD === 'true'
        ? Inert.createPlugin()
        : await webpackPlugin(),
    ]
  }
  await server.register(plugins)
  await server.start()
  server.log([], `Server running at ${server.info.uri}`)
})()

async function webpackPlugin() {
  const [Webpack, {configuration}] = await Promise.all([
    import('~/common/plugins/webpack'),
    import('~/../webpack.config.client'),
  ])
  return Webpack.createPlugin(configuration)
}
