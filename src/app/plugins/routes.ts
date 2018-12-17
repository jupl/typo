import {ServerRegisterPluginObject as Plugin} from 'hapi'

/**
 * Create routes plugin
 * @return Hapi plugin
 */
export const createPlugin = (): Plugin<{}> => ({
  plugin: {
    name: 'app-routes',
    register: server => server.route({
      handler: () => 'Placeholder',
      method: 'GET',
      path: '/placeholder',
    }),
  },
})
