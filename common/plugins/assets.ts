import {InertPlugin} from './inert'

export let AssetsPlugin = InertPlugin

if(process.env.NODE_ENV === 'development') {
  const {WebpackPlugin} = require('../../webpack/plugins/webpack')
  AssetsPlugin = WebpackPlugin
}
