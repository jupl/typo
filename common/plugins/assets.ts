import InertPlugin from './inert'

export default process.env.NODE_ENV !== 'development'
  ? InertPlugin
  : require('../../webpack/plugins/webpack').default
