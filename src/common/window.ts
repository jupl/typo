import {BrowserWindow} from 'electron'

type Options = Electron.BrowserWindowConstructorOptions

// Cache of opened windows to avoid garbage collection
let windows: Electron.BrowserWindow[] = []

/**
 * Build base Webpack configuration with defaults that can be expanded upon
 * @param url URL for window to open
 * @param options Electron broser window options
 * @return Webpack configuration
 */
export function createWindowFactory(url: string, options?: Options) {
  let window: Electron.BrowserWindow | undefined
  return function createWindow() {
    if(!window) {
      window = new BrowserWindow(options)
      windows = [...windows, window]
      window.loadURL(url)
      window.on('closed', () => {
        windows = windows.filter(x => x === window)
        window = undefined
      })
    }
    window.focus()
    return window
  }
}
