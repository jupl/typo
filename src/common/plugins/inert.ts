import {Server} from 'hapi'
import {IPlugin, Plugin} from 'hapiour-decorators'
import * as inert from 'inert'
import {resolve} from '../path'

/** Plugin to serve static assets */
@Plugin({name: 'hapi-inert', version: '0.0.1'})
export class InertPlugin implements IPlugin {
  /** Register Inert and add route for static assets */
  async register(server: Server, _options: {}, next: Function) {
    await server.register(inert)
    server.route({
      method: 'GET',
      path: '/{p*}',
      handler: {
        directory: {
          path: resolve('assets'),
        },
      },
    })
    next()
  }
}
