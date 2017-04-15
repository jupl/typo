import {Module, Route} from 'hapiour-decorators'
import {Request, IReply} from 'hapi'

@Module({basePath: '/'})
export default class Routes {
  @Route({method: 'GET', path: 'placeholder'})
  public index(_request: Request, reply: IReply) {
    reply('Placeholder')
  }
}
