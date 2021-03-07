import MiniBox from './bridges/mini-box'
import MiniGame from './bridges/mini-game'
import MiniPcGame from './bridges/mini-pc-game'

function undefinedProxy(obj: any, title: string) {
  obj = new Proxy(obj, {
    get(target, key) {
      if (!target[key]) {
        return (() => { console.warn(title, `${String(key)}函数还未初始化！`) })
      }
      return target[key]
    }
  })
  return obj
}

// eslint-disable-next-line semi-style
(function (global) {
  let inMiniBox = false; let inMiniGame = false; let inMiniPcGame = false
  if (MiniBox.isIn()) {
    const miniInstand = new MiniBox()
    global.mnb = miniInstand ? miniInstand.apis : {}
    inMiniBox = true
  }
  if (MiniGame.isIn()) {
    const miniInstand = new MiniGame()
    global.mnw = miniInstand ? miniInstand.apis : {}
    inMiniGame = true
  }
  if (MiniPcGame.isIn()) {
    const miniInstand = new MiniPcGame()
    global.mnwpc = miniInstand ? miniInstand.apis : {}
    inMiniPcGame = true
  }
  if (!global.mnb) { global.mnb = {} }
  global.mnb = undefinedProxy(global.mnb, inMiniBox ? '' : '不在迷你盒子环境')
  if (!global.mnw) { global.mnw = {} }
  global.mnw = undefinedProxy(global.mnw, inMiniGame ? '' : '不在迷你游戏环境')
  if (!global.mnwpc) { global.mnwpc = {} }
  global.mnwpc = undefinedProxy(global.mnwpc, inMiniPcGame ? '' : '不在迷你游戏PC版本环境')
}(window))
