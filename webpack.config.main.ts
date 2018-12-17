import {createConfiguration} from 'wcb'

/** Webpack configuration to build main process */
export const configuration = createConfiguration({
  destination: 'dist/bin',
  log: 'Main',
  paths: true,
  source: 'src/bin',
  target: 'electron-main',
})
