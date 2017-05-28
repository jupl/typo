import {addPlugins, addToEntries, createConfiguration} from 'wcb'
import {BannerPlugin} from 'webpack'

// Build base configuration
const configuration = addToEntries(addPlugins(createConfiguration({
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

// tslint:disable-next-line:no-default-export
export default configuration
