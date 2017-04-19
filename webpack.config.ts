import {createConfig} from './webpack/config'

// See common/webpack/index.ts for how configuration is built
// tslint:disable-next-line:no-default-export
export default createConfig({
  source: 'assets',
  destination: 'static',
})
