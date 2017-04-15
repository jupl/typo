import createConfig from './webpack/config'

// See common/webpack/index.ts for how configuration is built
export default createConfig({
  source: 'assets',
  destination: 'static',
})
