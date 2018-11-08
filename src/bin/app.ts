import {app} from 'electron'
import {resolve} from '../common/path'
import {createWindowFactory} from '../common/window'

let basePath = `file://${resolve('assets')}`
if(process.env.WEBPACK_BUILD !== 'true') {
  // tslint:disable-next-line:no-var-requires
  const {createServer, path} = require('../webpack/server')
  createServer()
  basePath = path
}

// Set up window when application starts
const createWindow = createWindowFactory(`${basePath}/app.html`)
app.on('ready', createWindow)
app.on('activate', createWindow)
if(process.platform !== 'darwin') {
  app.on('window-all-closed', () => app.quit())
}
