function counter(counter, step) {
    function sum() {
        return counter += step;
    }

    // Se devuelve la definicion de la funcion sum
    return sum;
}

var counterResult1 = counter(2,2);

// Sumamos dos, resultado: 4
counterResult1();

// Sumamos dos, resultado: 6
console.log(counterResult1());


var counterResult2 = counter(3, 3);

// Sumamos tres, resultado: 6
counterResult2();

// Sumamos tres, resultado: 9
console.log(counterResult2());
