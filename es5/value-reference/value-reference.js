// Por valor: tipos primitivos

var valueOne = 1;
var valueTwo = valueOne;

valueTwo = 2;
console.log(valueOne); // resultado: 1
console.log(valueTwo); // resultado: 2

// Por referencia: objetos

var valueOne = [1, 2];
var valueTwo = valueOne;

valueTwo[0] = 2;
console.log(valueOne); // resultado: [2, 2]
console.log(valueTwo); // resultsdo: [2, 2]
