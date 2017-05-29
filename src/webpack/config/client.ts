import {createConfiguration} from 'wcb'

// Build configuration
export let configuration = createConfiguration({
  assets: 'src/assets',
  common: true,
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  log: message => console.log(message),
  source: 'src/assets',
  useBabel: true,
})
