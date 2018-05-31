import {Plugin} from 'hapi'

/** Routes plugin */
export const plugin: Plugin<{}> = {
  name: 'app-routes',
  register: server => server.route({
    handler: () => 'Hello world',
    method: 'GET',
    path: '/',
  }),
}
