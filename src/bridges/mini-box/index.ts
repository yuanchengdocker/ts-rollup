import Utils from '../../utils'
import Config from './config'
import { Bridge } from '../interface'
import BgCommon from '../bgcommon'

export default class MiniBox extends BgCommon implements Bridge {
  constructor() {
    super(Config.optionConfigs)
    if (!MiniBox.isIn()) {
      throw new Error('MiniwanBox:Not used in minibox environment')
    }

    if (Utils.isIos()) {
      Utils.setupWebViewJavascriptBridge((bridge: any) => {
        this.init(this.initIosBridge(bridge.registerHandler, bridge.callHandler))
      })
    } else if (window.JSUserInfoInterface) {
      this.init(this.initAndroidBridge(window.JSUserInfoInterface))
    }
    this.noReadyCallback()
  }

  static isIn() {
    return /MiniWorldBox/gi.test(navigator.userAgent)
  }

  // registerHandler: ios注册函数（设置回调）， callHandler： ios调用函数
  private initIosBridge(registerHandler: any, callHandler: any) {
    return (method: string, callback: any, options: any) => {
      if (method === 'shareAction') {
        registerHandler('shareCallback', callback)
      }
      if (method === 'getUserAuthInfo') {
        registerHandler('getUserAuthInfoCallback', callback)
      }
      callHandler(method, options)
    }
  }

  // handler: 安卓调用接口对象
  private initAndroidBridge(handler: any) {
    return (method: string, callback: any, options: any) => {
      if (method === 'shareAction') {
        window.shareCallback = callback
        handler[method](options.title, options.content, options.imgUrl, options.shareUrl, options.sharePlatform)
      } else {
        if (method === 'getUserAuthInfo') {
          const userInfo = JSON.parse(handler.getUserAuthInfo())
          callback(userInfo)
          return
        }
        handler[method](JSON.stringify(options))
      }
    }
  }
}
