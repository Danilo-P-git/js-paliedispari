// var parolaInserita = prompt("Inserisci una parola");
function palindroma(Parola1) {
  var parolaPalindroma = parolaInserita.split('').reverse().join(''); ;
  return parolaPalindroma
}
var parolaInserita = prompt("Inserisci una parola");

var parolaCheck = palindroma(parolaInserita);
if (parolaInserita == parolaCheck) {
  console.log("La parola che hai inserito è palindorma");
}
else {
  console.log("La parola che hai inserito non è palindroma");
}
