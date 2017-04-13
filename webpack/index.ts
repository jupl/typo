import {App, Plugins, bootstrap} from 'hapiour-decorators'
import WebpackPlugin from './plugins/webpack'
import {port} from '../common/config'
import Server from '../common/server'

@App({port})
@Plugins([WebpackPlugin])
export default class HotServer extends Server {}

if(!module.parent) {
  bootstrap(HotServer)
}
