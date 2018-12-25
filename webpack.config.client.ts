import {addRules, addToEntries, createConfiguration} from 'wcb'

/** Webpack configuration to build client assets */
export const configuration = addToEntries(addRules(createConfiguration({
  assets: true,
  atlOptions: {useBabel: true},
  cssLoaders: [{test: /\.css$/, use: [{loader: 'css-loader'}]}],
  destination: 'dist/assets',
  devServer: process.env.DEV_SERVER === 'true',
  html: true,
  log: 'Client',
  paths: true,
  source: 'src/assets',
  split: true,
  webpack: {
    devServer: {proxy: {'/**': 'http://localhost:3001'}},
    output: {publicPath: '/'},
  },
}), [
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
]), [
  'normalize.css',
])
