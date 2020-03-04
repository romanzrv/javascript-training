var a = "some text";

function foo() {
    var a = "another text";
    var b = "one more text";
    console.log(a);
}

foo();
console.log(a);
console.log(b);

