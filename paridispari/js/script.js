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
  return  'pari';
 }
 else {
   return 'dispari';
 }
}

var checkTest = checkPariODispari(totale);

if (checkTest == pariODispari) {
  console.log("hai vinto");
}
else {
  console.log("hai perso");
}
