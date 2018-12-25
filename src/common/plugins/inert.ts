import {ServerRegisterPluginObject as Plugin} from 'hapi'
import Inert from 'inert'

/**
 * Construct Inert plugin
 * @param path Path to serve assetes
 * @return Hapi plugin
 */
export const createPlugin = (): Plugin<{}> => ({
  plugin: {
    name: 'common-insert',
    register: async server => {
      await server.register(Inert)
      server.route({
        handler: {directory: {path: '.'}},
        method: 'GET',
        options: {
          ext: {
            onPostHandler: {
              method: ({response}, h) => {
                // Cache webpack assets as they have unique hash names
                if(response !== null
                   && 'header' in response
                   && response.headers['content-type'] !== 'text/html') {
                  response.ttl(31536000000)
                }
                return h.continue
              },
            },
          },
        },
        path: '/{p*}',
      })
    },
  },
})
