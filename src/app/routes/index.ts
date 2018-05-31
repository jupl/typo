import {Plugin} from 'hapi'

/** Routes plugin */
export const plugin: Plugin<{}> = {
  name: 'app-routes',
  register: server => server.route({
    handler: () => 'Placeholder',
    method: 'GET',
    path: '/placeholder',
  }),
}
