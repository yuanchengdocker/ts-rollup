import { pcgameOptionConfigsInter } from '../interface'
const optionConfigs: pcgameOptionConfigsInter = {
  getUserAuth: { method: 'GetUrlAddAuthStr' },
  openMapDetail: { method: 'openMapDetail' },
  qqLoginBind: { method: 'QQLoginCallBack', callback: 'QQOpenIdBindCallBack' },
  qqLoginUnBind: { method: 'QQLoginUnCallBack', callback: 'QQOpenIdUnBindCallBack' },
  wechatLoginBind: { method: 'WeChatLoginCallBack', callback: 'WeChatOpenIdBindCallBack' },
  wechatLoginUnBind: { method: 'WeChatLoginUnCallBack', callback: 'WeChatOpenIdUnBindCallBack' },
  openRoom: { method: 'OpenRoomsByOwidAndUins' }
}

export default {
  optionConfigs
}
