import {Server} from 'hapi'
import {Plugin, IPlugin} from 'hapiour-decorators'
import * as asyncHandler from 'hapi-es7-async-handler'

@Plugin({name: 'hapi-async-handler', version: '1.0.3'})
export default class AsyncHandlerPlugin implements IPlugin {
  public async register(server: Server, _options: {}, next: Function) {
    let error
    try {
      await server.register({
        register: asyncHandler,
        options: {server},
      })
    }
    catch(e) {
      error = e
    }
    finally {
      next(error)
    }
  }
}
