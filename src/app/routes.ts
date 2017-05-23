import {IReply, Request} from 'hapi'
import {Module, Route} from 'hapiour-decorators'

/** App routes */
@Module({basePath: '/'})
export class Routes {
  /** GET index */
  @Route({method: 'GET', path: ''})
  index(_request: Request, reply: IReply) {
    reply('Hello, world')
  }
}
