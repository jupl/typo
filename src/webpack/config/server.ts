import {addPlugins, addToEntries, createConfiguration} from 'wcb'
import {BannerPlugin} from 'webpack'
import {cssLoaders} from './common'

/** Webpack configuration to build server */
export let configuration = addToEntries(addPlugins(createConfiguration({
  cssLoaders,
  destination: 'dist/bin',
  log: message => console.log(`[server] ${message}`),
  source: 'src/bin',
  target: 'node',
}), [
  new BannerPlugin({
    banner: '#!/usr/bin/env node',
    entryOnly: true,
    raw: true,
  }),
]), ['dotenv/config'])
