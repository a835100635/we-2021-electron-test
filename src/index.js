const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win = null;

app.on("ready", () => {
  win = new BrowserWindow({
    width: 1100,
    height: 700,
    center: true,
    // 配置窗口时 添加 preload
    webPreferences: {
      nodeIntegration: true, //渲染进程允许使用node
      contextIsolation: false  // 设置关闭，不然渲染进程报Uncaught ReferenceError: require is not defined
    },
  });
  // 加载本地html文件
  const filepath = `file:/${__dirname}/pages/home.html`;
  console.log('===>filepath', filepath)
  
  win.loadFile(__dirname+'/pages/home.html');
  //打开调试框
  win.webContents.openDevTools();

  //监听关闭事件，把主窗口设置为null
  win.on('closed',()=>{
    win = null
})
});

ipcMain.on("params", (event, data) => {
  console.log(">>>>>>>>params", data); // 我是渲染进程发送的参数
  win.reload();
});
