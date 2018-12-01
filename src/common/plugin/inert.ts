import {ServerRegisterPluginObject} from 'hapi'
import inert from 'inert'

/**
 * Construct Inert plugin
 * @param path Path to serve assetes
 * @return Hapi plugin
 */
export const createPlugin = (
  path: string,
): ServerRegisterPluginObject<{}> => ({
  plugin: {
    name: 'common-insert',
    register: async server => {
      await server.register(inert)
      server.route({
        handler: {
          directory: {
            path,
          },
        },
        method: 'GET',
        path: '/{p*}',
      })
    },
  },
})
