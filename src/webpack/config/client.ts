import {addRules, createConfiguration} from 'wcb'

/** Webpack configuration to build client assets */
export const configuration = addRules(createConfiguration({
  assets: true,
  atlOptions: {
    useBabel: true,
  },
  cssLoaders: [{test: /\.css$/, use: [{loader: 'css-loader'}]}],
  destination: 'dist/assets',
  html: true,
  log: 'Client',
  publicPath: '/',
  source: 'src/assets',
  split: true,
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
