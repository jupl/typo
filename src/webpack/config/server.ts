import {addPlugins, addToEntries, createConfiguration} from 'wcb'
import {BannerPlugin} from 'webpack'

/** Webpack config for server build */
export const configuration = addToEntries(addPlugins(createConfiguration({
  destination: 'dist/bin',
  log: message => console.log(message),
  source: 'src/bin',
  target: 'node',
}), [
  new BannerPlugin({
    banner: '#!/usr/bin/env node',
    entryOnly: true,
    raw: true,
  }),
]), ['dotenv/config'])
