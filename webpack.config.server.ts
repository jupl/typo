import {addPlugins, addToEntries, createConfiguration} from 'wcb'
import {BannerPlugin} from 'webpack'

/** Webpack configuration to build server */
export const configuration = addToEntries(addPlugins(createConfiguration({
  destination: 'dist/bin',
  log: 'Server',
  paths: true,
  source: 'src/bin',
  target: 'node',
}), [
  new BannerPlugin({
    banner: '#!/usr/bin/env node',
    entryOnly: true,
    raw: true,
  }),
]), ['dotenv/config'])
