// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80


// funzioni
// -------------------------------------------------
function numeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function controlloDoppi(array,numero) {

  doppio = false;

  for(var i = 0; i<array.length;i++)

    if (numero == array[i]) {
      doppio = true;
      return doppio;
    }
  return doppio;
}

// ----------------------------------------------


var livello = prompt("inserisci difficoltà (0,1,2) ");

switch (livello) {
  case "2":
    tentativi = 50;
    break;

    case "1":
      tentativi = 80;
      break;

  default:
    tentativi = 100;
}

console.log("livello di difficoltà", livello);

var tentativiTotali = tentativi - 16;
var arrayBombe =[];

while (arrayBombe.length < 16) {
  var bombe = numeriRandom(1,tentativi);
  if (!arrayBombe.includes(bombe)) {
    arrayBombe.push(bombe);
  }
}
console.log("array bombe ",arrayBombe);

var arrayNumeroUtente = [];
var gameOver = false;

while (arrayNumeroUtente.length < tentativiTotali && gameOver == false) {
  var numeroUtente = numeriRandom(1,tentativi);

  if (controlloDoppi(arrayNumeroUtente,numeroUtente)) {
    arrayNumeroUtente.push();
  }
  else if (controlloDoppi(arrayBombe,numeroUtente)==false) {
    arrayNumeroUtente.push(numeroUtente);
  }
  else {
    var gameOver = true;
  }
}

console.log("array n utente ",arrayNumeroUtente);
var punteggio = arrayNumeroUtente.length;
console.log("PUNTEGGIO ", punteggio );
