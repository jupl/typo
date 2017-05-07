import {addToEntries, createConfiguration} from 'wcb'

/** Webpack configuration to build server */
export const configuration = addToEntries(createConfiguration({
  log: message => console.log(`[server] ${message}`),
  pattern: ['**/main.ts'],
  target: 'node',
}), ['dotenv/config'])
