import {createConfiguration} from 'wcb'
import {cssLoaders} from './common'

/** Webpack configuration to build renderer process */
export const configuration = createConfiguration({
  cssLoaders,
  assets: 'src/assets',
  destination: 'dist/assets',
  log: message => console.log(`[renderer] ${message}`),
  source: 'src/assets',
  target: 'electron-renderer',
})
