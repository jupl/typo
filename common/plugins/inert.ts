import {Server} from 'hapi'
import {Plugin, IPlugin} from 'hapiour-decorators'
import * as inert from 'inert'
import {resolve} from 'path'

@Plugin({name: 'hapi-ejs', version: '0.0.1'})
export class InertPlugin implements IPlugin {
  public async register(server: Server, _options: {}, next: Function) {
    await server.register(inert)
    server.route({
      method: 'GET',
      path: '/{p*}',
      handler: {
        directory: {
          path: resolve(__dirname, '../../static'),
        },
      },
    })
    next()
  }
}
