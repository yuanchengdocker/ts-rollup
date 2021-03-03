import Utils from '../../utils'
import Config from './config'

type callbackObj = {
  fnKey: string
  args: any
}

export default class MiniBox {
  public apis = { hasInit: false }

  private readyCallbacks: callbackObj[] = []

  constructor() {
    if (!this.isInBox()) {
      throw new Error('MiniwanBox:Not used in minibox environment')
    }
    this.noReadyCallback()
    if (Utils.isIos()) {
      Utils.setupWebViewJavascriptBridge((bridge: any) => {
        this.init(this.initIosBridge(bridge.registerHandler, bridge.callHandler))
      })
    } else {
      if (window.JSUserInfoInterface) {
        this.init(this.initAndroidBridge(window.JSUserInfoInterface))
      }
    }
  }

  private isInBox() {
    return true || /MiniWorldBox/gi.test(navigator.userAgent)
  }

  private noReadyCallback() {
    if (this.apis.hasInit) return
    Object.keys(Config.optionConfigs).forEach((option: string) => {
      this.apis[option] = (...args: any[]) => {
        console.log('等待初始化中...')
        if (!this.readyCallbacks.find((item) => item.fnKey === option)) {
          this.readyCallbacks.push({ fnKey: option, args })
        }
      }
    })
  }

  private init(handler: any) {
    Object.keys(Config.optionConfigs).forEach((option) => {
      // 初始化完成
      this.apis.hasInit = true
      // option:外部调用方法名 apis 来对接外部调用函数执行
      this.apis[option] = (callback: any, options = {}) => {
        const optionObj = Config.optionConfigs[option]
        const boxName = optionObj.boxName
        const defaultOption = optionObj.option
        // boxName ：app对接名, defaultOption: config配置option参数
        // callback: 回调函数 options：传递客户端参数
        handler(boxName, defaultOption, callback, options)
      }
    })
    // 初始化后回调之前缓存的调用函数
    let fnObj = this.readyCallbacks.shift()
    while (fnObj) {
      this.apis[fnObj.fnKey](...fnObj.args)
      fnObj = this.readyCallbacks.shift()
    }
  }

  private initIosBridge(registerHandler: any, callHandler: any) {
    return (boxName: string, defaultOption: any, callback: any, options: any) => {
      if (boxName === 'shareAction') {
        registerHandler('shareCallback', callback)
      }
      if (boxName === 'getUserAuthInfo') {
        registerHandler('getUserAuthInfoCallback', callback)
      }
      callHandler(boxName, Object.assign({}, defaultOption, options))
    }
  }

  private initAndroidBridge(handler: any) {
    return (boxName: string, defaultOption: any, callback: any, options: any) => {
      if (boxName === 'shareAction') {
        window.shareCallback = callback
        handler[boxName](options.title, options.content, options.imgUrl, options.shareUrl, options.sharePlatform)
      } else {
        if (boxName === 'getUserAuthInfo') {
          const userInfo = JSON.parse(handler.getUserAuthInfo())
          callback(userInfo)
          return
        }
        handler[boxName](JSON.stringify(options))
      }
    }
  }
}
