function myFunc1(callback) {
    console.log('I am inside muFunc1 function!');
    callback();
}

myFunc1(function () {
    console.log('I am inside the callback function!');
});
