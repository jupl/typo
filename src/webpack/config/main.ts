import {createConfiguration} from 'wcb'
import {cssLoaders} from './common'

/** Webpack configuration to build main process */
export const configuration = createConfiguration({
  cssLoaders,
  destination: '.dist/bin',
  log: message => console.log(`[main] ${message}`),
  source: 'src/bin',
  target: 'electron-main',
})
