import {ServerRegisterPluginObject as Plugin} from 'hapi'
import Inert from 'inert'

/**
 * Construct Inert plugin
 * @param path Path to serve assetes
 * @return Hapi plugin
 */
export const createPlugin = (path: string): Plugin<{}> => ({
  plugin: {
    name: 'common-insert',
    register: async server => {
      await server.register(Inert)
      server.route({
        handler: {directory: {path}},
        method: 'GET',
        path: '/{p*}',
      })
    },
  },
})
