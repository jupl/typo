import {addRules, createConfiguration} from 'wcb'

/** Webpack configuration to build renderer process */
export const configuration = addRules(createConfiguration({
  assets: 'src/assets',
  destination: 'dist/assets',
  log: message => console.log(`[renderer] ${message}`),
  source: 'src/assets',
  target: 'electron-renderer',
}), [
  {test: /\.css$/, use: ['style-loader', 'css-loader']},
])
