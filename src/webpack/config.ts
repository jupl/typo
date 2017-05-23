import {addRules, createConfiguration} from 'wcb'
import {optimize} from 'webpack'

// Build configuration
export let configuration = addRules(createConfiguration({
  assets: 'src/assets',
  destination: 'dist/assets',
  log: message => console.log(message),
  source: 'src/assets',
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
