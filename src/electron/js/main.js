// Modules to control application life and create native browser window
// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow } = require('electron');
const process = require('process');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: false },
  });

  // and load the url of the electron.
  const url = process.argv[process.argv.length - 1];
  const s = `
    This app will load the URL passed as the last CLI argument.
    http(s):// and file:// schemas are supported.
    file:// URLs need to be absolute.
    
    Try (with the dev server running)
      http://localhost:1234/demo/index.html
    or (after building the demo app)
      file://$(pwd)/dist/demo/index-dist.html
    
    Loading ${url}.
  `;
  // eslint-disable-next-line no-console
  console.log(s);
  mainWindow.loadURL(url);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the electron when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => app.quit());

// In this file you can include the rest of your electron's specific main process
// code. You can also put them in separate files and require them here.
