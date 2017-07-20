import {ReplyNoContinue as Reply, Request, Server} from 'hapi'

Object.assign(register, {attributes: {name: 'app-routes'}})

/** Add application routes to server instance */
export function register(server: Server, _: {}, next: Function) {
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
