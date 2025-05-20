// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”

// 🎯 BONUS
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.


let genericData: unknown;

if (typeof genericData === 'string') {
  console.log(genericData.toUpperCase());
} else if (typeof genericData === 'number') {
  console.log(genericData * 2);
} else if (typeof genericData === 'boolean') {
  console.log(genericData ? "Sì" : "No");
} else if (genericData === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(genericData)) {
  console.log(genericData.length);
} else if (genericData instanceof Promise) {
  genericData.then((messaggio) => console.log(messaggio));
} else {
  console.log("Tipo non supportato")
}
