// Patch to fix tsconfig-paths plugin
// tslint:disable-next-line:no-object-mutation
Object.assign(process.env, {TS_NODE_PROJECT: ''})

import * as client from './webpack.config.client'
import * as server from './webpack.config.server'

// tslint:disable-next-line:no-default-export
export default process.env.DEV_SERVER === 'true'
  ? client.configuration
  : [client.configuration, server.configuration]
