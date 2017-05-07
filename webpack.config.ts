import {addRules, createConfiguration} from 'wcb'

// See common/webpack/index.ts for how configuration is built
// tslint:disable-next-line:no-default-export
export default addRules(createConfiguration({
  assets: 'assets',
  destination: 'static',
  log: console.log,
  source: 'assets',
}), [
  {test: /\.css$/, use: ['style-loader', 'css-loader']},
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
