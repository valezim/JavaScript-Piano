const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})


function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}


function show (want) {

if (want == 'vane'){
  var intro = document.getElementById('intro');
  intro.style.display = 'none'; 

  var want = document.getElementById(want);
  var regular = document.getElementById('regular');
  var marti = document.getElementById('marti');
  var mela = document.getElementById('mela');
  regular.style.display = 'none'; 
  marti.style.display = 'none'; 
  mela.style.display = 'none'; 
  want.removeAttribute("style");

  var navregular = document.getElementById('navregular');
  var navmarti = document.getElementById('navmarti');
  var navmela = document.getElementById('navmela');

  var navvane = document.getElementById('navvane');
  navvane.classList.toggle('active');

  navregular.removeAttribute("class");
  navmarti.removeAttribute("class");
  navmela.removeAttribute("class");

} else if (want == 'regular') {
  var intro = document.getElementById('intro');
  intro.style.display = 'none'; 

  var want = document.getElementById(want);
  var vane = document.getElementById('vane');
  var marti = document.getElementById('marti');
  var mela = document.getElementById('mela');
  vane.style.display = 'none'; 
  marti.style.display = 'none'; 
  mela.style.display = 'none'; 
  want.removeAttribute("style");

  var navregular = document.getElementById('navregular');
  var navmarti = document.getElementById('navmarti');
  var navmela = document.getElementById('navmela');
  var navvane = document.getElementById('navvane');

  navregular.classList.toggle('active');
  navvane.removeAttribute("class");
  navmarti.removeAttribute("class");
  navmela.removeAttribute("class");

} else if (want == 'marti') {
  var intro = document.getElementById('intro');
  intro.style.display = 'none'; 

  var want = document.getElementById(want);
  var regular = document.getElementById('regular');
  var vane = document.getElementById('vane');
  var mela = document.getElementById('mela');
  regular.style.display = 'none'; 
  vane.style.display = 'none'; 
  mela.style.display = 'none'; 
  want.removeAttribute("style");

  var navregular = document.getElementById('navregular');
  var navmarti = document.getElementById('navmarti');
  var navmela = document.getElementById('navmela');
  var navvane = document.getElementById('navvane');
  navmarti.classList.toggle('active');
  navregular.removeAttribute("class");
  navvane.removeAttribute("class");
  navmela.removeAttribute("class");

} else if (want == 'mela') {
  var intro = document.getElementById('intro');
  intro.style.display = 'none'; 
  
  var want = document.getElementById(want);
  var regular = document.getElementById('regular');
  var marti = document.getElementById('marti');
  var vane = document.getElementById('vane');
  regular.style.display = 'none'; 
  marti.style.display = 'none'; 
  vane.style.display = 'none'; 
  want.removeAttribute("style");

  var navregular = document.getElementById('navregular');
  var navmarti = document.getElementById('navmarti');
  var navmela = document.getElementById('navmela');
  var navvane = document.getElementById('navvane');
  navmela.classList.toggle('active');

  navregular.removeAttribute("class");
  navmarti.removeAttribute("class");
  navvane.removeAttribute("class");
}




}

