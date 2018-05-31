import {Plugin} from 'hapi'
import * as inert from 'inert'
import {resolve} from '../path'

/** Inert plugin */
export const plugin: Plugin<{}> = {
  name: 'common-insert',
  async register(server) {
    await server.register(inert)
    server.route({
      handler: {
        directory: {
          path: resolve('assets'),
        },
      },
      method: 'GET',
      path: '/{p*}',
    })
  },
}
