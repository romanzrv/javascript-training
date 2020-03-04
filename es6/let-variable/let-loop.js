console.log("var loop scope:");

var a = 20;
for (var a = 0; a < 2; a++) {
    console.log(a);
}

console.log(a);


console.log("let loop scope:");

let i = 30;
for (let i = 0; i < 2; i++) {
    console.log(i);
}

console.log(i);
