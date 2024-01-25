// // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// // Sommiamo i due numeri

// // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Creo una funzione per il random
// Creo una funzione per i numeri pari o dispari
// Chiedo all'utente la scelta tra pari o dispari
// Chiedo all'utente un numero tra 1 e 5
// Sommo i due numeri
// Controllo se la somma sia para o dispara
// Dichiaro il vincitore

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const scelta = prompt("scegli pari o dispari", "pari");
const numero = prompt("scegli un numero da 1 a 5", "2");

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function getRandomNumber(min = 1, max = 5, IsMaxIncluded = true) {
  if (min >= max) {
    console.errore(
      `i numeri forniti sono sbagliati. : ${min} è maggiore o uguale a ${max}`
    );
    return;
  }
  if (IsMaxIncluded) max++;
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber = getRandomNumber();
if (randomNumber) {
  console.log(randomNumber);
  console.log(" è un numero");
}
