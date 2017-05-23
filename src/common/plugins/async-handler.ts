import {Server} from 'hapi'
import * as asyncHandler from 'hapi-es7-async-handler'
import {IPlugin, Plugin} from 'hapiour-decorators'

/** Plugin to handle async route handlers */
@Plugin({name: 'hapi-async-handler', version: '1.0.3'})
export class AsyncHandlerPlugin implements IPlugin {
  /** Register async handler (requires server instance) */
  async register(server: Server, _options: {}, next: Function) {
    await server.register({
      register: asyncHandler,
      options: {server},
    })
    next()
  }
}
