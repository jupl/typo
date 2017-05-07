import {addRules, createConfiguration} from 'wcb'
import {optimize} from 'webpack'

/** Webpack configuration to build client assets */
export let configuration = addRules(createConfiguration({
  assets: 'assets',
  destination: 'static',
  log: message => console.log(`[client] ${message}`),
  source: 'assets',
  useBabel: true,
}), [
  {test: /\.css$/, use: ['style-loader', 'css-loader']},
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
if(Object.keys(configuration.entry).length > 1) {
  configuration = {
    ...configuration,
    plugins: [
      ...configuration.plugins,
      new optimize.CommonsChunkPlugin({name: 'common'}),
    ],
  }
}
