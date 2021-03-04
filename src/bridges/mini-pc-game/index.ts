import Config from './config'
import { Bridge } from '../interface'
import BgCommon from '../bgcommon'

export default class MiniGame extends BgCommon implements Bridge {
  apis: any

  constructor() {
    super(Config.optionConfigs)
    if (!MiniGame.isIn()) {
      throw new Error('MiniwanPcGame:Not used in minigame environment')
    }
    setTimeout(() => {
      this.init(this.initBridge())
    }, 0)
    this.noReadyCallback()
  }

  static isIn() {
    return !!(window.GetUrlAddAuthStr && window.GetUrlAddAuthStr())
  }

  private initBridge() {
    return (method: string, callback: any, options: any, initCallbackName?: string) => {
      if (method == 'GetUrlAddAuthStr') {
        const obj = typeof window[method]() === 'string' ? JSON.parse(window[method]()) : window[method]()
        callback(obj)
        return
      }
      if (initCallbackName) {
        (window as any)[initCallbackName] = function (result: any) { callback(result) }
      }
      (window as any)[method](JSON.stringify(options))
    }
  }
}
