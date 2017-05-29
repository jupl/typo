import {addRules, createConfiguration} from 'wcb'
import {cssLoaders} from './common'

/** Webpack configuration to build client assets */
export let configuration = addRules(createConfiguration({
  assets: 'src/assets',
  common: true,
  cssLoaders,
  destination: 'dist/assets',
  log: message => console.log(`[client] ${message}`),
  source: 'src/assets',
  useBabel: true,
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
