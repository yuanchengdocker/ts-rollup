export {}

declare global {
  interface Window {
    mnb: any
    WebViewJavascriptBridge: any
    WVJBCallbacks: any
    JSUserInfoInterface: any
    shareCallback: any
  }
}
