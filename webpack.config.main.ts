import {addToEntries, createConfiguration} from 'wcb'

/** Generated webpack configuration */
export const configuration = addToEntries(createConfiguration({
  assets: true,
  atlOptions: {useBabel: true},
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  devServer: true,
  html: true,
  paths: true,
  source: 'src/assets',
  split: true,
}), [
  'normalize.css',
])
