import {F_OK} from 'constants'
import * as CopyPlugin from 'copy-webpack-plugin'
import {accessSync} from 'fs'
import {Configuration} from 'webpack'
import {resolve} from './util'

/** Options for asset integration */
interface Options {
  assets: string
  ignore: string[]
}

/**
 * Add static assets to Webpack configuration
 * @param config Configuration to modify
 * @param options Asset options
 * @return Updated configuration
 */
export function addAssets(
  {plugins = [], ...config}: Configuration,
  {assets, ignore}: Options,
): Configuration {
  // If there is an assets folder, tell Webpack to copy contents as part of
  // build
  try {
    const from = resolve(assets)
    accessSync(from, F_OK)
    return {
      ...config,
      plugins: [...plugins, new CopyPlugin([{from, ignore}])],
    }
  }
  catch(e) {
    // Skip copy from assets
    return config
  }
}
