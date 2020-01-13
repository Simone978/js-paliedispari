// Scrivi una funzione per capire se la parola è palindroma

// var parola = prompt('inserisci una parola');
//
// var risultato = palindroma(parola);
//
// if (risultato== true){
//   console.log(parola + ' è palindroma');
// }else{
//   console.log(parola + ' non è palindroma');
// }
//
// function palindroma(word){
//   var parolaContrario ='';
//   for (var i = parola.length - 1; i >= 0; i--) {
//     parolaContrario += parola[i];
//   }
//   if(parola == parolaContrario){
//     parolaContrario = true;
//   }else{
//     parolaContrario = false;
//   }
//   return parolaContrario;
// }

// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var utentePariDispari = prompt('inserisci pari o dispari');
var utenteNumero = parseInt(prompt('inserisci un numero'));
var numeroPc = sceltaPc(1,5);
var controlloPariDispari = sommaEControlla(utenteNumero, numeroPc);

if(controlloPariDispari == true){
  console.log('Hai vinto');
}else{
  console.log('Hai perso');
}

// funzione che genera numero random del computer
function sceltaPc(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione che somma gli argomenti e controlla se il numero è pari o dispari in relazione alla scelta dell'utente
function sommaEControlla(numero1, numero2){
  var risultato='';
  var somma = numero1 + numero2;
  if(somma %2 == 0 && utentePariDispari == 'pari'){
    risultato = true;
  }else if (somma %2 != 0 && utentePariDispari == 'dispari') {
    risultato = true;
  }else{
    risultato = false;
  }
  return risultato;
}
