import {Server as HapiServer} from 'hapi'
import {IApp} from 'hapiour-decorators'

export class Server implements IApp {
  protected server: HapiServer

  constructor(server: HapiServer) {
    this.server = server
  }

  public onStart() {
    console.log('Server running at:', this.server.info.uri)
  }
}
