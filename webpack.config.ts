import {addPlugins, addToEntries, createConfiguration} from 'wcb'
import {BannerPlugin} from 'webpack'

// tslint:disable-next-line:no-default-export
export default addToEntries(addPlugins(createConfiguration({
  destination: 'dist/bin',
  source: 'src/bin',
  target: 'node',
}), [
  new BannerPlugin({
    banner: '#!/usr/bin/env node',
    entryOnly: true,
    raw: true,
  }),
]), ['dotenv/config'])
