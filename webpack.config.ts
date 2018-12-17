// Patch to fix tsconfig-paths plugin
Object.assign(process.env, {TS_NODE_PROJECT: ''})

import * as main from './webpack.config.main'
import * as renderer from './webpack.config.renderer'

// tslint:disable-next-line:no-default-export
export default [main.configuration, renderer.configuration]
