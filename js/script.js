// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Lista da stampare!!!
var lista = document.getElementById('js_lista');

// Stampare una lista di 1 a 100!
for(var i = 1; i <= 100; i++) {
  if(i % 15 === 0){
    // ((i % 3 === 0)&&(i % 5 === 0))
    // Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
    lista.innerHTML += '<li class="fizzbuzz-wrapper">' + 'FizzBuzz' + '</li>';
  } else if(i % 3 === 0){
    // Per i numeri che sono multipli di 3 stampi "Fizz".
    lista.innerHTML += '<li class="fizz-wrapper">' + 'Fizz' + '</li>';
  } else if(i % 5 === 0){
    // Per i numeri che sono multipli di 3 stampi "Buzz".
    lista.innerHTML += '<li class="buzz-wrapper">' + 'Buzz' + '</li>';
  } else {
    lista.innerHTML += '<li>' + i + '</li>';
  }
}
