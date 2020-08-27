function palindroma(Parola1) {
  var parolaPalindroma = parolaInserita.split('').reverse().join(''); ;
  return parolaPalindroma === parolaInserita;
}
var parolaInserita = prompt("Inserisci una parola");
var parolaCheck = palindroma(parolaInserita);
