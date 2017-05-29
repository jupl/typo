import {addRules, createConfiguration} from 'wcb'
import {cssLoaders} from './common'

/** Webpack configuration to build renderer process */
export const configuration = addRules(createConfiguration({
  assets: 'src/assets',
  cssLoaders,
  destination: 'dist/assets',
  log: message => console.log(`[renderer] ${message}`),
  source: 'src/assets',
  target: 'electron-renderer',
}), [
  {test: /\.css$/, use: ['style-loader', 'css-loader']},
])
