import {App, Inject, Plugins} from 'hapiour-decorators'
import {AsyncHandlerPlugin} from '../common/plugins/async-handler'
import {Server} from '../common/server'
import {Routes} from './routes'

const RADIX = 10
const DEFAULT_PORT = 3000
let port = parseInt(process.env.PORT, RADIX)
if(isNaN(port)) {
  port = DEFAULT_PORT
}

/** Application server */
@App({port, routes: {security: process.env.NODE_ENV !== 'development'}})
@Plugins([AsyncHandlerPlugin])
@Inject([Routes])
export class AppServer extends Server {}
