import {addToEntries, createConfiguration} from 'wcb'
import {BannerPlugin} from 'webpack'

/** Webpack configuration to build server */
export let configuration = addToEntries(createConfiguration({
  log: message => console.log(`[server] ${message}`),
  pattern: ['**/main.ts'],
  target: 'node',
}), ['dotenv/config'])

// Add banner to bin files
configuration = {
  ...configuration,
  plugins: [
    ...configuration.plugins,
    new BannerPlugin({
      banner: '#!/usr/bin/env node',
      entryOnly: true,
      raw: true,
    }),
  ],
}
