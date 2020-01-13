// Scrivi una funzione per capire se la parola è palindroma

var parola = prompt('inserisci una parola');

var risultato = palindroma(parola);

if (risultato== true){
  console.log(parola + ' è palindroma');
}else{
  console.log(parola + ' non è palindroma');
}

function palindroma(word){
  var parolaContrario ='';
  for (var i = parola.length - 1; i >= 0; i--) {
    parolaContrario += parola[i];
  }
  if(parola == parolaContrario){
    parolaContrario = true;
  }else{
    parolaContrario = false;
  }
  return parolaContrario;
}
