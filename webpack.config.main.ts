import {createConfiguration} from 'wcb'

/** Webpack configuration to build main process */
export const configuration = createConfiguration({
  destination: 'static',
  log: message => console.log(`[main] ${message}`),
  pattern: ['**/main.ts'],
  source: 'assets',
  target: 'electron-main',
})
