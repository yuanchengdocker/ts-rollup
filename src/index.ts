import MiniBox from './bridges/mini-box'
import MiniGame from './bridges/mini-game'
import MiniPcGame from './bridges/mini-pc-game'
((global) => {
  if (MiniBox.isIn()) {
    const miniInstand = new MiniBox()
    global.mnb = miniInstand ? miniInstand.apis : {}
  }
  if (MiniGame.isIn()) {
    const miniInstand = new MiniGame()
    global.mnw = miniInstand ? miniInstand.apis : {}
  }
  if (MiniPcGame.isIn()) {
    const miniInstand = new MiniPcGame()
    global.mnwpc = miniInstand ? miniInstand.apis : {}
  }
})(window)
