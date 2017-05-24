import {InertPlugin} from './inert'

/** By default assets plugin points to inert plugin */
export let AssetsPlugin = InertPlugin

// If in development environment, use Webpack plugin instead
if(process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line no-var-requires
  const {WebpackPlugin} = require('../../webpack/plugins/webpack')
  AssetsPlugin = WebpackPlugin
}
