import {ServerRegisterPluginObject as Plugin} from 'hapi'

/**
 * Create routes plugin
 * @return Hapi plugin
 */
export const createPlugin = (): Plugin<{}> => ({
  plugin: {
    name: 'app-routes',
    register: server => server.route({
      handler: () => 'Hello world',
      method: 'GET',
      path: '/',
    }),
  },
})
