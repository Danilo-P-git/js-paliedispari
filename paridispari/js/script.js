var pariODispari = prompt("Pari o dispari");
var numeroScelto = parseInt(prompt("Inserisci un numero tra 1 e 5"));
function genNumero() {
  var numeroGenerato = Math.floor(Math.random() * 5) + 1;
  return numeroGenerato;
}

var totale = numeroScelto + genNumero();
console.log("il numero è " + totale);

function checkPariODispari() {
 var check = false;
 if (totale % 2 == 0) {
  return  check = true;
 }
 else {
   return check = false;
 }
}

var checkTest = checkPariODispari(totale);

if (checkTest == true) {
  console.log("Il numero è pari se hai scelto pari hai vinto.")
}
else {
  console.log("il numero è dispari se hai scelto dispari hai vinto");
}
