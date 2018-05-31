import {addRules, createConfiguration} from 'wcb'
import {cssLoaders} from './common'

/** Webpack configuration to build client assets */
export const configuration = addRules(createConfiguration({
  cssLoaders,
  assets: 'src/assets',
  atlOptions: {
    useBabel: true,
  },
  common: true,
  destination: 'dist/assets',
  log: message => console.log(`[client] ${message}`),
  source: 'src/assets',
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
