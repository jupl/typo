import {Plugin} from 'hapi'

/** Routes plugin */
export const plugin: Plugin<{}> = {
  name: 'app-routes',
  register(server) {
    server.route({
      method: 'GET',
      path: '/',
      handler: () => 'Hello world',
    })
  },
}
