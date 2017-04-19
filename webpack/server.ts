import {App, Plugins, bootstrap} from 'hapiour-decorators'
import {WebpackPlugin} from './plugins/webpack'
import {Server} from '../common/server'

const RADIX = 10
const DEFAULT_PORT = 3000
const port = parseInt(process.env.PORT, RADIX) || DEFAULT_PORT

@App({port})
@Plugins([WebpackPlugin])
export class WebpackServer extends Server {}

if(!module.parent) {
  bootstrap(WebpackServer)
}
