type callbackObj = {
  fnKey: string
  args: any
}

export default class BgCommon {
  public apis: any = { hasInit: false }

  private optionConfigs = []

  private readyCallbacks: callbackObj[] = []

  constructor(optionConfigs: any) {
    this.optionConfigs = optionConfigs
  }

  protected noReadyCallback(): void {
    if (this.apis.hasInit) return
    Object.keys(this.optionConfigs).forEach((option: string) => {
      this.apis[option] = (...args: any[]) => {
        console.log('等待初始化中...')
        if (!this.readyCallbacks.find((item) => item.fnKey === option)) {
          this.readyCallbacks.push({ fnKey: option, args })
        }
      }
    })
  }

  protected init(handler: any) {
    Object.keys(this.optionConfigs).forEach((option: string) => {
      // 初始化完成
      this.apis.hasInit = true
      // option:外部调用方法名 apis 来对接外部调用函数执行
      this.apis[option] = (callback: any, options = {}) => {
        const optionObj = (this.optionConfigs as any)[option]
        const method = optionObj.method
        const defaultOption = optionObj.option
        const callbackName = optionObj.callback
        options = Object.assign({}, defaultOption, options)
        // method ：app对接名, defaultOption: config配置option参数
        // callback: 回调函数 options：传递客户端参数
        handler(method, callback, options, callbackName)
      }
    })
    // 初始化后回调之前缓存的调用函数
    let fnObj = this.readyCallbacks.shift()
    while (fnObj) {
      this.apis[fnObj.fnKey](...fnObj.args)
      fnObj = this.readyCallbacks.shift()
    }
  }
}
