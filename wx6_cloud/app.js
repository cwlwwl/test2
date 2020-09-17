//app.js
App({
  db: null,
  onLaunch() {
    //云开发环境初始化
    wx.cloud.init({
      env: "wgr-42c92d" //环境id,打开云环境可以查看到
    });
    //1得到数据库
    this.db = wx.cloud.database({env: 'wgr-42c92d'});
  }
})