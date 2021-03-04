export default {
  isIos(): boolean {
    return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },
  isFunction(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Function]'
  },
  isObject(obj: any) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  },
  setupWebViewJavascriptBridge(callback: any): void {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    const WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  },
  setReadyWebViewJavascriptBridge(callback: any): void {
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      () => {
        callback(window.WebViewJavascriptBridge)
      },
      false
    )
  }
}
