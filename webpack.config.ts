import {createConfiguration} from 'wcb'

// tslint:disable-next-line:no-default-export
export default createConfiguration({
  assets: 'src/assets',
  atlOptions: {
    useBabel: true,
  },
  common: true,
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: '.dist/assets',
  devServer: true,
  log: message => console.log(message),
  source: 'src/assets',
})
