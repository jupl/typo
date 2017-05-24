import * as client from './src/webpack/configs/client'
import * as server from './src/webpack/configs/server'

// tslint:disable-next-line:no-default-export
export default [client.configuration, server.configuration]
