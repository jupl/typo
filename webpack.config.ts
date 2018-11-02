import {createConfiguration} from 'wcb'

let configuration = createConfiguration({
  assets: 'src/assets',
  atlOptions: {
    useBabel: true,
  },
  common: true,
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  hotReload: process.env.HOT_MODULES === 'true' ? 'server' : 'none',
  log: message => console.log(message),
  source: 'src/assets',
})

configuration = {
  ...configuration,
  devServer: {
    hot: process.env.HOT_MODULES === 'true',
    port: 3000,
    stats: {
      all: false,
      builtAt: true,
      errors: true,
    },
  },
}

/** Webpack configuration */
export default configuration // tslint:disable-line:no-default-export
