import { gameOptionConfigsInter } from '../interface'

const optionConfigs:gameOptionConfigsInter = {
  openShare: { method: 'startWebViewShare' }, // 游戏原生分享
  refreshPage: { method: 'reload' }, // 刷新页面
  openAD: { method: 'showAdvertisement' }, // 打开广告
  closeWindow: { method: 'stop' }, // 关闭浏览器
  showBar: { method: 'showBar' }, // 显示所有工具栏
  hideBar: { method: 'hideBar' }, // 隐藏所有工具栏
  showShareBtn: { method: 'showShareBtn' }, // 显示分享按钮
  hideShareBtn: { method: 'hideShareBtn' }, // 隐藏分享按钮
  shareToQQ: { method: 'startWebViewShare', option: { platform: ['fx_qq'] } }, // 分享到QQ
  shareToFB: { method: 'startWebViewShare', option: { platform: ['fx_fb'] } }, // 分享到FB
  shareToTwitter: {
    method: 'startWebViewShare',
    option: { platform: ['fx_tw'] }
  }, // 分享到TW
  shareToWechat: {
    method: 'startWebViewShare',
    option: { platform: ['fx_wx'] }
  }, // 分享微信
  shareToWeibo: {
    method: 'startWebViewShare',
    option: { platform: ['fx_wb'] }
  }, // 分享微博
  shareToTimeline: {
    method: 'startWebViewShare',
    option: { platform: ['fx_pyq'] }
  }, // 分享到朋友圈
  shareToQZone: {
    method: 'startWebViewShare',
    option: { platform: ['fx_qqkj'] }
  }, // 分享到QQ空间
  getNetworkType: { method: 'getNetworkType' }, // 获取当前网络状况
  checkMiniboxInstallStatus: { method: 'isMiniBoxInstalled' }, // 检测是否安装盒子
  openMinibox: { method: 'openMiniBox' }, // 打开盒子
  donwloadImage: { method: 'downloadBitmap' }, // 下载图片
  hasAD: { method: 'advertisementCanShow' }, // 判断是否有广告
  initNativeShare: { method: 'saveSharedData' }, // 初始化工具栏分享数据
  openChargeStore: { method: 'openChargeStore' }, // 打开充值页面  只在移动端openBrowser=3
  openMapDetail: { method: 'openMapDetail' }, // 打开地图详情页 只在移动端openBrowser=3
  getUserAuth: { method: 'GetUrlAddAuthStr' }, // 获取游戏登录状态
  openRoom: { method: 'OpenRoomsByOwidAndUins' }, // 打开游戏制定房间 只在移动端openBrowser=3
  openTheme: { method: 'OpenMiniWorksTheme' } // 打开地图专题页 只在移动端openBrowser=3
}

export default {
  optionConfigs
}
