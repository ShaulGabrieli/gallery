'use strict'

function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
  }


  function PlaySound(sound) {
    var audio = new Audio('../sounds/' + sound + '.mp3')
    audio.play()
}

function makeId(length = 6) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var txt = ''
  for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}