import {addRules, createConfiguration} from 'wcb'

/** Webpack configuration to build client assets */
export const configuration = addRules(createConfiguration({
  assets: true,
  atlOptions: {
    useBabel: true,
  },
  common: true,
  cssLoaders: [{test: /\.css$/, use: [{loader: 'css-loader'}]}],
  destination: 'dist/assets',
  log: 'Client',
  source: 'src/assets',
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
