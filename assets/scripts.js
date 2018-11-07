// jugador vs jugador
const inputsAutobots = document.querySelectorAll('input[name=autobot]');
const jugadores = document.querySelector('.ppvp1');
const resultado = document.querySelector('.section2');
// Autobots
const optimus = document.querySelector('.optimus');
const bumblebee = document.querySelector('.bumblebee');
const ironhead = document.querySelector('.ironhead');

const optimuswin = document.querySelector('.optimus-win');
const bumblebeewin = document.querySelector('.bumblebee-win');
const ironheadwin = document.querySelector('.ironhide-win');

const optimusdead = document.querySelector('.optimus-dead');
const bumblebeedead = document.querySelector('.bumblebee-dead');
const ironheadead = document.querySelector('.ironhide-dead');

const optimustied = document.querySelector('.optimus-tied');
const bumblebeetied = document.querySelector('.bumblebee-tied');
const ironheadtied = document.querySelector('.ironhide-tied');
// Decepticons
const megatron = document.querySelector('.megatron');
const starscream = document.querySelector('.starscream');
const barricade = document.querySelector('.barricade');

const resultTexto = document.querySelector('.resultTexto');
for(let i = 0; i < inputsAutobots.length; i++) {
  inputsAutobots[i].addEventListener('click', chooseAutobot);
}

let autobot;
function chooseAutobot(event) {
  autobot = event.target.value;
}

const inputsDecepticons = document.querySelectorAll('input[name=decepticon]');

for(let i = 0; i < inputsDecepticons.length; i++) {
  inputsDecepticons[i].addEventListener('click', chooseDecepticon);
}
let decoration;
function chooseDecepticon(event) {
  decepticon = event.target.value;
  versus(autobot, decepticon);

  jugadores.classList.add('hidden');
  resultado.classList.remove('hidden');
}


function versus(autobot, decepticon) {
  if (autobot == "optimus" && decepticon == "barricade") {
    optimusdead.classList.remove('hidden');
    resultTexto.innerHTML = "¡Decepticons esta batalla la han ganado! Han derrotado a los Autobots pero no se rendiranlos Autobots";
   } else if (autobot == "optimus" && decepticon == "starscream") {
     optimuswin.classList.remove('hidden');
     resultTexto.innerHTML = "¡El mal ha caido Autobots! Los Decepticons han sido derrotados pero estemos alertas, el mal nunca duerme";
   } else if (autobot == "optimus" && decepticon == "megatron") {
     optimustied.classList.remove('hidden');
     resultTexto.innerHTML = "¡Esto esta parejo! Llamen refuerzos e intentemos esta lucha de nuevo";
   } else if (autobot == "ironhead" && decepticon == "starscream") {
     ironheadead.classList.remove('hidden');
     resultTexto.innerHTML = "!Decepticons esta batalla la han ganado! Han derrotado a los Autobots pero no se rendiranlos Autobots";
   } else if (autobot == "ironhead" && decepticon == "megatron"){
     ironheadwin.classList.remove('hidden');
     resultTexto.innerHTML = "¡El mal ha caido Autobots! Los Decepticons han sido derrotados pero estemos alertas, el mal nunca duerme";
   } else if (autobot == "ironhead" && decepticon == "barricade") {
     ironheadtied.classList.remove('hidden');
     resultTexto.innerHTML = "¡Esto esta parejo! Llamen refuerzos e intentemos esta lucha de nuevo";
   } else if (autobot == "bumblebee" && decepticon == "megatron") {
     bumblebeedead.classList.remove('hidden');
     resultTexto.innerHTML = "!Decepticons esta batalla la han ganado! Han derrotado a los Autobots pero no se rendiranlos Autobots";
   } else if (autobot == "bumblebee" && decepticon == "barricade") {
     bumblebeewin.classList.remove('hidden');
     resultTexto.innerHTML = "¡El mal ha caido Autobots! Los Decepticons han sido derrotados pero estemos alertas, el mal nunca duerme";
   } else if (autobot == "bumblebee" && decepticon == "starscream") {
     bumblebeetied.classList.remove('hidden');
     resultTexto.innerHTML = "¡Esto esta parejo! Llamen refuerzos e intentemos esta lucha de nuevo";
   }
}

// Jugador vs Compu

const player = document.querySelectorAll('input[name=autobotc]');
const selection = document.querySelector('.computer');
const results = document.querySelector('.computer2');

const optimusc = document.querySelector('.optimusc');
const bumblec = document.querySelector('.bumblebeec');
const hound = document.querySelector('.hound');

const optimuscWin = document.querySelector('.optimus-win');
const bumbleWin = document.querySelector('.bumble-win');
const houndWin = document.querySelector('.hound-win');

const optimuscdead = document.querySelector('.optimus-dead');
const bumbledead = document.querySelector('.bumble-dead');
const hounddead = document.querySelector('.hound-dead');

const optimusctied = document.querySelector('.optimus-tied');
const bumbletied = document.querySelector('.bumble-tied');
const houndtied = document.querySelector('.hound-tied');

const relTexto = document.querySelector('.relTexto');


for(let i = 0; i < player.length; i++) {
  player[i].addEventListener('click', chooseAutobotc);
}

function chooseAutobotc(event) {
  let autobotc = event.target.value;

  selection.classList.add('hidden');
  results.classList.remove('hidden');

  computerChoose(autobotc);
}

function computerChoose(autobotc) {
  let computer = Math.floor(Math.random()*3);
  if(computer == 0) {
    computer = 'optimusc';
  } else if( computer == 1) {
    computer = 'bumblec';
  } else {
    computer = 'hound';
  }

  match(autobotc, computer);
}

function match(autobotc, computer) {
  // console.log(autobotc, computer);
if (autobotc == "optimusc" && computer == "hound") {
    optimuscdead.classList.remove('hidden');
    relTexto.innerHTML = "Quintessa te ha capturado. La destrucción de la tierra comienza";
  } else if (autobotc == "optimusc" && computer == "bumblec") {
    optimuscWin.classList.remove('hidden');
    relTexto.innerHTML = "EL PLANETA TIERRA ESTA A SALVO, ¡AUTOBOTS! SIEMPRE ESTAREMOS UNIDOS PARA DERROTAR A CUALQUIERA QUE QUIERA HACERLE DAÑO A LA HUMANIDAD";
  } else if (autobotc == "optimusc" && computer == "optimusc") {
    optimusctied.classList.remove('hidden');
    relTexto.innerHTML = "PARECE QUE NUESTRAS FUERZAS ESTÁN POR IGUAL, ES MOMENTO DE HACER UNA NUEVA ESTRATEGIA";
  } else if (autobotc == "hound" && computer == "bumblec") {
    hounddead.classList.remove('hidden');
    relTexto.innerHTML = "¡Quintessa te ha capturado. La destrucción de la tierra comienza";
  } else if (autobotc == "hound" && computer == "optimusc"){
    houndWin.classList.remove('hidden');
    relTexto.innerHTML = "EL PLANETA TIERRA ESTA A SALVO, ¡AUTOBOTS! SIEMPRE ESTAREMOS UNIDOS PARA DERROTAR A CUALQUIERA QUE QUIERA HACERLE DAÑO A LA HUMANIDAD";
  }else if (autobotc == "hound" && computer == "hound") {
    houndtied.classList.remove('hidden');
    relTexto.innerHTML = "PARECE QUE NUESTRAS FUERZAS ESTÁN POR IGUAL, ES MOMENTO DE HACER UNA NUEVA ESTRATEGIA";
  } else if (autobotc == "bumblebeec" && computer == "optimusc") {
    bumbledead.classList.remove('hidden');
    relTexto.innerHTML = "¡Quintessa te ha capturado. La destrucción de la tierra comienza";
  } else if (autobotc == "bumblebeec" && computer == "hound") {
    bumbleWin.classList.remove('hidden');
    relTexto.innerHTML = "EL PLANETA TIERRA ESTA A SALVO, ¡AUTOBOTS! SIEMPRE ESTAREMOS UNIDOS PARA DERROTAR A CUALQUIERA QUE QUIERA HACERLE DAÑO A LA HUMANIDAD";
  }else if (autobotc == "bumblebeec" && computer == "bumblec") {
    bumbletied.classList.remove('hidden');
    relTexto.innerHTML = "PARECE QUE NUESTRAS FUERZAS ESTÁN POR IGUAL, ES MOMENTO DE HACER UNA NUEVA ESTRATEGIA";
  }
}
