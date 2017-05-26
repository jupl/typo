import {ReplyNoContinue as Reply, Request, Server} from 'hapi'
import * as asyncHandler from 'hapi-es7-async-handler'

Object.assign(register, {attributes: {name: 'app-routes'}})

/** Add application routes to server instance */
export async function register(server: Server, _: {}, next: Function) {
  await server.register(asyncHandler, {once: true})
  server.route({
    method: 'GET',
    path: '/',
    handler: index,
  })
  next()
}

async function index(_: Request, reply: Reply) {
  reply('Hello, world')
}
