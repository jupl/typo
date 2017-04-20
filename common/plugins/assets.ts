import {InertPlugin} from './inert'

export const AssetsPlugin = process.env.NODE_ENV !== 'development'
  ? InertPlugin
  : require('../../webpack/plugins/webpack').WebpackPlugin
