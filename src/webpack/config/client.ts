import {createConfiguration} from 'wcb'

/** Webpack configuration */
export const configuration = createConfiguration({
  assets: 'src/assets',
  common: true,
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  log: message => console.log(message),
  source: 'src/assets',
  useBabel: true,
})
