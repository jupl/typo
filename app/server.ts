import {App, Inject, Plugins} from 'hapiour-decorators'
import {Routes} from './routes'
import {Server} from '../common/server'
import {AsyncHandlerPlugin} from '../common/plugins/async-handler'

const RADIX = 10
const DEFAULT_PORT = 3000
const port = parseInt(process.env.PORT, RADIX) || DEFAULT_PORT

@App({port, routes: {security: process.env.NODE_ENV !== 'development'}})
@Plugins([AsyncHandlerPlugin])
@Inject([Routes])
export class AppServer extends Server {}
