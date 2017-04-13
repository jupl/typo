import {App, Plugins, bootstrap} from 'hapiour-decorators'
import {port} from '../common/config'
import Server from '../common/server'
import WebpackPlugin from './plugins/webpack'

@App({port})
@Plugins([WebpackPlugin])
export default class HotServer extends Server {}

if(!module.parent) {
  bootstrap(HotServer)
}
