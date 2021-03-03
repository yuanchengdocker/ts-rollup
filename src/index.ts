import MiniBox from './lib/mini-box';
((global) => {
  const miniBox = new MiniBox()
  global.mnb = miniBox.apis
})(window)
