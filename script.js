console.log('JS OK');

// Recupero l'elemento HTML (1)
const element = document.getElementById('password');
console.log(element);

// Dichiaro una variabile nome - Chiedo il nome all'utente - Salvo il nome in una variabile (2, 3, 4)
const firstName = prompt('Qual è il tuo nome?');
console.log(firstName);

// Dichiaro una variabile cognome - Chiedo il cognome all'utente - Salvo il cognome in una variabile (5, 6, 7)
const lastName = prompt('Qual è il tuo cognome?');
console.log(lastName);

// Dichiaro una variabile colore - Chiedo il colore preferito all'utente - Salvo il colore in una variabile (8, 9, 10)
const favoriteColor = prompt('Qual è il tuo colore preferito?');
console.log(favoriteColor);

// Dichiaro un numero salvandolo in una variabile (11,12)
const randomNumber = 22;
console.log(randomNumber);

// Costruisco il messaggio (13)
const message = `La tua passaword è: <strong> ` + firstName + lastName + favoriteColor + randomNumber + ` </strong>`;
console.log(message);

// Inserisco il messaggio nell'elemento
element.innerHTML = message;
console.log(message)