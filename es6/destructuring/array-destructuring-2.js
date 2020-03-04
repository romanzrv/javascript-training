// Destructuracion ignorando elementos

let myArray = [1, 2, 3, 4, 5, 6, 7]

// second element is not needed
let [num1, , num2] = myArray;
let [, , , , , num6, num7] = myArray;

console.log(num1);
console.log(num2);

console.log(num6);
console.log(num7);
