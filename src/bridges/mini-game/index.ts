import Utils from '../../utils'
import Config from './config'
import { Bridge } from '../interface'
import BgCommon from '../bgcommon'

export default class MiniGame extends BgCommon implements Bridge {
  constructor() {
    super(Config.optionConfigs)
    if (!MiniGame.isIn()) {
      throw new Error('MiniwanGame:Not used in minigame environment')
    }

    if (Utils.isIos()) {
      Utils.setReadyWebViewJavascriptBridge((bridge: any) => {
        bridge.init()
        this.init(this.initIosBridge(bridge.registerHandler, bridge.callHandler))
      })
    } else if (window.WebViewJavascriptBridge) {
      this.init(this.initAndroidBridge(window.WebViewJavascriptBridge))
    }
    this.noReadyCallback()
  }

  static isIn() {
    return /MiniWorldGame/gi.test(navigator.userAgent)
  }

  // registerHandler: ios注册函数（设置回调）， callHandler： ios调用函数
  private initIosBridge(registerHandler: any, callHandler: any) {
    return (method: string, callback: any, options: any) => {
      if (method === 'networkTypeChange') {
        registerHandler(method, options, callback)
      } else {
        if (method === 'startWebViewShare') {
          registerHandler('shareCallback', callback)
          callHandler(method, options)
        } else if (method === 'donwloadImage') {
          registerHandler('downLoadPhoto', callback)
          callHandler(method, options)
        } else if (method === 'showAdvertisement') {
          registerHandler('playAdCallback', callback)
          callHandler(method)
        } else {
          callHandler(method, options, callback)
        }
      }
    }
  }

  // handler: 安卓调用接口对象
  private initAndroidBridge(handler: any) {
    return (method: string, callback: any, options: any) => {
      if (handler[method]) {
        if (method === 'startWebViewShare') {
          this.apis.shareCallback = callback
        } else if (method === 'showAdvertisement') {
          this.apis.playAdCallback = callback
        }
        try {
          const result = handler[method](JSON.stringify(options))
          if (method === 'GetUrlAddAuthStr') {
            callback(JSON.parse(result))
            return
          }
          const _methods = [
            'getNetworkType',
            'downloadBitmap',
            'hideBar',
            'showBar',
            'isMiniBoxInstalled',
            'openMiniBox',
            'advertisementCanShow',
            'openChargeStore',
            'openMapDetail'
          ]
          if (_methods.includes(method) && callback) callback(result)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
