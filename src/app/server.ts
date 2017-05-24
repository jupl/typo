import {App, Inject, Plugins} from 'hapiour-decorators'
import {AssetsPlugin} from '../common/plugins/assets'
import {AsyncHandlerPlugin} from '../common/plugins/async-handler'
import {Server} from '../common/server'
import {Routes} from './routes'

const RADIX = 10
const DEFAULT_PORT = 3000
let port = parseInt(process.env.PORT, RADIX)
const security = process.env.NODE_ENV !== 'development'
if(isNaN(port)) {
  port = DEFAULT_PORT
}

/** Application server */
@App({port, routes: {security}})
@Plugins([AsyncHandlerPlugin, AssetsPlugin])
@Inject([Routes])
export class AppServer extends Server {}
