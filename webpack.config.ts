import {addRules, createConfiguration} from 'wcb'

// tslint:disable-next-line:no-default-export
export default addRules(createConfiguration({
  assets: 'assets',
  destination: 'static',
  log: message => console.log(message),
  source: 'assets',
}), [
  {test: /\.css$/, use: ['style-loader', 'css-loader']},
  {test: /\.(gif|jpg|jpeg|png|svg)$/, use: ['file-loader']},
])
