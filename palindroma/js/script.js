// faccio la funzione per girare una parola
function palindroma(Parola1) {
  var parolaPalindroma = parolaInserita.split('').reverse().join(''); ;
  return parolaPalindroma
}
// inserisco una parola
var parolaInserita = prompt("Inserisci una parola");
// dichiaro una variabile di appoggio con la funzione
var parolaCheck = palindroma(parolaInserita);
// creo un if e stampo
if (parolaInserita == parolaCheck) {
  console.log("La parola che hai inserito è palindorma");
}
else {
  console.log("La parola che hai inserito non è palindroma");
}
