import {app} from 'electron'
import {resolve} from '../common/path'
import {createWindowFactory} from '../common/window'

(async() => { // tslint:disable-line:no-floating-promises
  let basePath = `file://${resolve('assets')}`
  if(process.env.WEBPACK_BUILD !== 'true') {
    const {createServer} = await import('../webpack/server')
    const server = await createServer()
    const info = server.address()
    basePath = typeof info === 'string'
      ? info
      : `http://localhost:${info.port}`
  }

  // Set up window when application starts
  const createWindow = createWindowFactory(`${basePath}/app.html`)
  app.on('ready', createWindow)
  app.on('activate', createWindow)
  if(process.platform !== 'darwin') {
    app.on('window-all-closed', () => app.quit())
  }
})()
