var pariODispari = prompt("Scegli pari o dispari");
var numeroScelto = parseInt(prompt("Inserisci un numero tra 1 e 5"));
function genNumero() {
  var numeroGenerato = Math.floor(Math.random() * 5) + 1;
  return numeroGenerato;
}

var totale = numeroScelto + genNumero();
console.log(totale);
