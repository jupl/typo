import {createConfiguration} from 'wcb'

/** Webpack configuration to build main process */
export const configuration = createConfiguration({
  destination: 'dist/bin',
  log: 'Main',
  source: 'src/bin',
  target: 'electron-main',
})
