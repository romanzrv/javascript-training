function sumThreeNumbers(num1, num2, num3, callback) {
    console.log('I am inside the sum function!');
    var sumResult = num1 + num2 + num3;
    callback(sumResult);
}

sumThreeNumbers(2, 3, 4, function (result) {
    console.log('Sum result: ' + result);
});
