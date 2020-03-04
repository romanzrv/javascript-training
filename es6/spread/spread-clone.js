// Asignacion por referencia

let myObj1 = {param1: 1, param2: 2};
let myObj2 = myObj1;
myObj2.param1 = 5;

console.log(myObj1);
console.log(myObj2);

// Clonacion de objeto
// Para clonacion de arrays es con [...]

let myObj1Clone = {param1Clone: 1, param2Clone: 2};
let myObj2Clone = {...myObj1Clone};
myObj2Clone.param1Clone = 5;

console.log(myObj1Clone);
console.log(myObj2Clone);
