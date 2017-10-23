import {ReplyNoContinue as Reply, Request, Server} from 'hapi'

Object.assign(register, {attributes: {name: 'app-routes'}})

/**
 * Add application routes to server instance
 * @param server Hapi server instance
 * @param _options Unused options
 * @param next Post calllback
 */
export function register(server: Server, _options: {}, next: Function) {
  server.route({
    method: 'GET',
    path: '/',
    handler: index,
  })
  next()
}

function index(_: Request, reply: Reply) {
  reply('Hello, world')
}
