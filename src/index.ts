import MiniBox from './bridges/mini-box'
import MiniGame from './bridges/mini-game'
import MiniPcGame from './bridges/mini-pc-game'
((global) => {
  let miniInstand = null
  if (MiniBox.isIn()) miniInstand = new MiniBox()
  if (MiniGame.isIn()) miniInstand = new MiniGame()
  if (MiniPcGame.isIn()) miniInstand = new MiniPcGame()

  global.mnb = miniInstand ? miniInstand.apis : {}
})(window)
