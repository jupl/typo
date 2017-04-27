import {App, Plugins} from 'hapiour-decorators'
import {Server} from '../common/server'
import {WebpackPlugin} from './plugins/webpack'

const RADIX = 10
const port = parseInt(process.env.PORT, RADIX)

/** Development server that serves up Webpack assets */
@App({port})
@Plugins([WebpackPlugin])
export class WebpackServer extends Server {}
