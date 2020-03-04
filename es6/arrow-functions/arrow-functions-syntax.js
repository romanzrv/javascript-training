// No arguments

// Traditional functions

function myFunc() {
    return 'coin';
}

// Arrow functions

const myFuncArrow = () => 'coin';

let a = myFunc();
let b = myFuncArrow();

console.log(a);
console.log(b);

// With arguments

// Traditional functions

function myFunc2(num1, num2) {
    return num1 + num2;
}

// Arrow functions

const myFuncArrow2 = (num1, num2) => num1 + num2;

let c = myFunc2(2, 2);
let d = myFuncArrow2(2, 2);

console.log(c);
console.log(d);

// Arrow functions more that 1 line

const myFuncMultiline = (a, b) => {
    let sum = a + b;
    return sum;
};
