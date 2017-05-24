import {IReply, Request} from 'hapi'
import {Module, Route} from 'hapiour-decorators'

/** App routes */
@Module({basePath: '/'})
export class Routes {
  /** GET placeholder */
  @Route({method: 'GET', path: 'placeholder'})
  index(_request: Request, reply: IReply) {
    reply('Placeholder')
  }
}
