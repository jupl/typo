import {addToEntries, createConfiguration} from 'wcb'

/** Webpack configuration to build renderer process */
export const configuration = addToEntries(createConfiguration({
  assets: true,
  common: true,
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  devServer: true,
  html: true,
  log: 'Renderer',
  paths: true,
  source: 'src/assets',
  target: 'electron-renderer',
}), [
  'normalize.css',
])
