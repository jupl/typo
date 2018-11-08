import {createConfiguration} from 'wcb'
import {cssLoaders} from './common'

/** Webpack configuration to build renderer process */
export const configuration = createConfiguration({
  cssLoaders,
  assets: 'src/assets',
  destination: 'dist/assets',
  hotReload: process.env.HOT_MODULES === 'true' ? 'server' : 'none',
  log: message => console.log(`[renderer] ${message}`),
  source: 'src/assets',
  target: 'electron-renderer',
})
