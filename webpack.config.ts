import {addRules, addToEntries, createConfiguration} from 'wcb'
import {optimize} from 'webpack'

/** Webpack configuration to build client assets */
export let clientConfiguration = addRules(createConfiguration({
  assets: 'assets',
  destination: 'static',
  log: message => console.log(`[client] ${message}`),
  source: 'assets',
  useBabel: true,
}), [
  {test: /\.css$/, use: ['style-loader', 'css-loader']},
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
if(Object.keys(clientConfiguration.entry).length > 1) {
  clientConfiguration = {
    ...clientConfiguration,
    plugins: [
      ...clientConfiguration.plugins,
      new optimize.CommonsChunkPlugin({name: 'common'}),
    ],
  }
}

/** Webpack configuration to build server */
export const serverConfiguration = addToEntries(createConfiguration({
  log: message => console.log(`[server] ${message}`),
  pattern: ['**/bin.ts'],
  target: 'node',
}), ['dotenv/config'])

// tslint:disable-next-line:no-default-export
export default [clientConfiguration, serverConfiguration]
