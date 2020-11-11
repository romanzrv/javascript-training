let getCoins = new Promise((resolve, reject) => {
    // Invocamos resolve() cuando lo que estabamos haciendo asincronamente ha terminado con exito, en caso contrario invocamos reject()
    // En este ejemplo, utilizamos setTimeout() para simular una operacion asincrona
    setTimeout( function() {
        resolve("10 coins!");
    }, 3000);
});

const coins = () => {
    console.log('Get coins...');
    getCoins.then((success) => {
        console.log(`He obtenido ${success}`);
    });
    console.log('COINtinue executing...');
};

coins();
