const { app, BrowserWindow } = require('electron');
const process = require('process');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile("index.html")
})

app.on('window-all-closed', () => {
    if(process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})