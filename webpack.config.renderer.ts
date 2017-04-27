import {addRules, createConfiguration} from 'wcb'

/** Webpack configuration to build renderer process */
export const configuration = addRules(createConfiguration({
  assets: 'assets',
  assetsIgnore: ['**/*.ts{,x}'],
  destination: 'static',
  log: message => console.log(`[renderer] ${message}`),
  pattern: ['**/*.ts{,x}', '!**/main.ts'],
  source: 'assets',
  target: 'electron-renderer',
}), [
  {test: /\.css$/, use: ['style-loader', 'css-loader']},
])
