// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Lista da stampare!!!
var listaUno = document.getElementById('js_lista-1');

// Stampare una lista di 1 a 100!
for(var i = 1 ; i <= 100; i++) {
  if(i % 15 === 0){
    // ((i % 3 === 0)&&(i % 5 === 0))
    // Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
    listaUno.innerHTML += '<li class="fizzbuzz-1-wrapper">' + 'FizzBuzz' + '</li>';
  } else if(i % 3 === 0){
    // Per i numeri che sono multipli di 3 stampi "Fizz".
    listaUno.innerHTML += '<li class="fizz-1-wrapper">' + 'Fizz' + '</li>';
  } else if(i % 5 === 0){
    // Per i numeri che sono multipli di 3 stampi "Buzz".
    listaUno.innerHTML += '<li class="buzz-1-wrapper">' + 'Buzz' + '</li>';
  } else {
    listaUno.innerHTML += '<li>' + i + '</li>';
  }
}


// VERSIONE WHILE!!!
var listaDue = document.getElementById('js_lista-2');

var j = 1;
while( j <= 100 ) {
  if(j % 15 === 0){
    // ((i % 3 === 0)&&(i % 5 === 0))
    // Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
    listaDue.innerHTML += '<li class="fizzbuzz-2-wrapper">' + 'FizzBuzz' + '</li>';
  } else if(j % 3 === 0){
    // Per i numeri che sono multipli di 3 stampi "Fizz".
    listaDue.innerHTML += '<li class="fizz-2-wrapper">' + 'Fizz' + '</li>';
  } else if(j % 5 === 0){
    // Per i numeri che sono multipli di 3 stampi "Buzz".
    listaDue.innerHTML += '<li class="buzz-2-wrapper">' + 'Buzz' + '</li>';
  } else {
    listaDue.innerHTML += '<li>' + j + '</li>';
  };
  j++;
}
