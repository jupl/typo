import {addToEntries, createConfiguration} from 'wcb'

// tslint:disable-next-line:no-default-export
export default addToEntries(createConfiguration({
  assets: true,
  atlOptions: {
    useBabel: true,
  },
  cssLoaders: [{test: /\.css$/, use: ['css-loader']}],
  destination: 'dist/assets',
  devServer: true,
  html: true,
  source: 'src/assets',
  split: true,
}), [
  'normalize.css',
])
