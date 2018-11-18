import {createConfiguration} from 'wcb'

/** Webpack configuration to build renderer process */
export const configuration = createConfiguration({
  assets: 'src/assets',
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  devServer: true,
  log: 'Renderer',
  source: 'src/assets',
  target: 'electron-renderer',
})
