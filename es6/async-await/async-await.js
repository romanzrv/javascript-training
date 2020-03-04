function getCoins() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('50 coins!');
        }, 3000);
    });
}

async function getMyCoinsNow() {
    console.log('calling');
    const result = await getCoins();
    console.log('Continue executing coins getter...');
    console.log(`He obtenido ${result}`);
}

getMyCoinsNow();
