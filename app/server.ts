#!/usr/bin/env node
import 'dotenv/config'
import {App, Inject, Plugins, bootstrap} from 'hapiour-decorators'
import Routes from './routes'
import Server from '../common/server'
import AssetsPlugin from '../common/plugins/assets'
import AsyncHandlerPlugin from '../common/plugins/async-handler'

const RADIX = 10
const DEFAULT_PORT = 3000
const port = parseInt(process.env.PORT, RADIX) || DEFAULT_PORT
const security = process.env.NODE_ENV !== 'development'

@App({port, routes: {security}})
@Plugins([AsyncHandlerPlugin, AssetsPlugin])
@Inject([Routes])
export default class AppServer extends Server {}

if(!module.parent) {
  bootstrap(AppServer)
}
