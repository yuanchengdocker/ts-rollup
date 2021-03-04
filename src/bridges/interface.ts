export interface Bridge {
  apis: any
}

export interface optionsObjInter {
  method: string,
  option?: any
}
export interface gameOptionConfigsInter {
  openShare: optionsObjInter, // 游戏原生分享
  refreshPage: optionsObjInter, // 刷新页面
  openAD: optionsObjInter, // 打开广告
  closeWindow: optionsObjInter, // 关闭浏览器
  showBar: optionsObjInter, // 显示所有工具栏
  hideBar: optionsObjInter, // 隐藏所有工具栏
  showShareBtn: optionsObjInter, // 显示分享按钮
  hideShareBtn: optionsObjInter, // 隐藏分享按钮
  shareToQQ: optionsObjInter, // 分享到QQ
  shareToFB: optionsObjInter, // 分享到FB
  shareToTwitter: optionsObjInter, // 分享到TW
  shareToWechat: optionsObjInter, // 分享微信
  shareToWeibo: optionsObjInter, // 分享微博
  shareToTimeline: optionsObjInter, // 分享到朋友圈
  shareToQZone: optionsObjInter, // 分享到QQ空间
  getNetworkType: optionsObjInter, // 获取当前网络状况
  checkMiniboxInstallStatus: optionsObjInter, // 检测是否安装盒子
  openMinibox: optionsObjInter, // 打开盒子
  donwloadImage: optionsObjInter, // 下载图片
  hasAD: optionsObjInter, // 判断是否有广告
  initNativeShare: optionsObjInter, // 初始化工具栏分享数据
  openChargeStore: optionsObjInter, // 打开充值页面  只在移动端openBrowser=3
  openMapDetail: optionsObjInter, // 打开地图详情页 只在移动端openBrowser=3
  getUserAuth: optionsObjInter, // 获取游戏登录状态
  openRoom: optionsObjInter, // 打开游戏制定房间 只在移动端openBrowser=3
  openTheme: optionsObjInter // 打开地图专题页 只在移动端openBrowser=3
}

export interface boxOptionConfigsInter {
  openShareActionSheet: optionsObjInter,
  shareToWechat: optionsObjInter,
  shareToTimeline: optionsObjInter,
  shareToQQ: optionsObjInter,
  shareToQZone: optionsObjInter,
  openMapAction: optionsObjInter,
  getUserAuthInfo: optionsObjInter
}

export interface pcOptionsObjInter {
  method: string,
  callback?: string
}
export interface pcgameOptionConfigsInter {
  getUserAuth:pcOptionsObjInter,
  openMapDetail:pcOptionsObjInter,
  qqLoginBind:pcOptionsObjInter,
  qqLoginUnBind:pcOptionsObjInter,
  wechatLoginBind:pcOptionsObjInter,
  wechatLoginUnBind:pcOptionsObjInter,
  openRoom:pcOptionsObjInter
}
